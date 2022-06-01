import Axios from "axios";
import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import ListComponent from "./components/ListComponent";


const design = {
  textDecoration: "underline red 0.3rem",
  textAlign: "center",
  fontSize: "1.5rem",
  background: "rgb(255, 230, 230)",
  border: "2px solid #555",
  borderRadius: "10px"
};
const Title = (props) => (
  <h1 style={design} >โปรแกรมรายรับ รายจ่าย {props.name}</h1>
);
const Description = () => {
  return (
    <p style={{ color: "red", textAlign: "center", fontSize: "1.3rem" }}>
      เรียกข้อมูลจาก API
    </p>
  );
};

function App() {
  const [dataList, setDataList] = useState([]);
  // const [dataItem, setDataItem] = useState([]);
  // const onAddNewItem = (newItem) => {
  //   console.log("data is ",newItem);
  //   setDataItem((prevItem)=>{
  //     return [newItem,...prevItem]
  //   })
  // }
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
      <button onClick={getData}>Get Data From API</button>
      <ListComponent />
    
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
