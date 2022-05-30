import Axios from "axios";
import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import FormComponent from "./components/FormComponent";
import ListComponent from "./components/ListComponent";


const design = {
  color: "blue",
  textAlign: "center",
  fontSize: "1.5rem",
};
const Title = (props) => (
  <h1 style={design}>โปรแกรมบัญชีพัสดุ ทรัพย์สิน {props.name}</h1>
);
const Description = () => {
  return (
    <p style={{ color: "red", textAlign: "center", fontSize: "1.5rem" }}>
      เรียกข้อมูลพัสดุที่มี
    </p>
  );
};

function App() {
  const [dataList, setDataList] = useState([]);
  const onAddNewItem = (newItem) => {
    console.log("data is ",newItem);
  }
  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setDataList(response.data);
    });
  };
  let myList = [];
  for (let i = 0; i < dataList.length; i++) {
      if(i===10) break
      myList.push(<Item name={dataList[i]} key={i} />);
  }
  console.log(dataList.length);
  console.log(myList);

  return (
    <div className="container">
      <Title name="อบจ.สตูล" />
      <Description />
      <FormComponent onAddItem={onAddNewItem}/>
      <ListComponent />
      press to render myList
      <button onClick={getData}>Get Data</button>

      <ul className="item-list">
        {/* {dataList.map((val,key)=>{
          return (
            <Item name={val} key={key} />
          )
        })} */}
        {myList}
      </ul>
    </div> //root element
  );
}

export default App;
