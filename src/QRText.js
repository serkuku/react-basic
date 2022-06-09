import { useState} from "react";
import QRCode from 'react-qr-code'

function QRText() {
  const [text, setText] = useState("");
  const [qrText, setQrText] = useState("");
  
  function handleSubmit(e) {
    e.preventDefault();

    setQrText(text);

    return false;
  }


  return (
    <div className="form-control">
      {qrText.length > 0 && <QRCode value={qrText} />}
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Text or URL</label>
        <input
          type="text"
          placeholder="ระบุข้อความ"
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
        />
      </div>
      <div>
        <button type="submit" className="btn">
          Generate
        </button>
      </div>
    </form>
    </div>
  );
}

export default QRText;
