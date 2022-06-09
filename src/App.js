import Axios from "axios";
import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import ListComponent from "./components/ListComponent";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import QRText from "./QRText";
import DataContext from "./data/DataContext";

function App() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [dataItem, setDataItem] = useState([]);
  // const onAddNewItem = (newItem) => {
  //   console.log("data is ",newItem);
  //   setDataItem((prevItem)=>{
  //     return [newItem,...prevItem]
  //   })
  // }
  const getData = () => {
    setLoading(true);
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setDataList(response.data);
    });
    setLoading(false);
  };
  let myList = [];
  for (let i = 0; i < dataList.length; i++) {
    if (i === 10) break;
    myList.push(<Item name={dataList[i]} key={i} />);
  }
  console.log(dataList.length);
  console.log(myList);

  return (
    <DataContext.Provider value={"satunpao"}>
    <div className="">
      <Card sx={{ maxWidth: 2000 }}>
        <CardActionArea>
          <div className="container">
            <CardMedia
              component="img"
              sx={{ width: "50%", objectFit: "cover" }}
              image="../../images/satunpao.png"
              alt="satunpao logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                อบจ.สตูล
              </Typography>
              <Typography variant="body2" color="text.secondary">
                เรียกข้อมูลจาก API/เพิ่มรายการข้อมูล/Generate QR Code
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
        <CardActions sx={{ flexDirection: "column" }}>
          <LoadingButton
            size="small"
            color="secondary"
            onClick={getData}
            onChange={() => setLoading(!loading)}
            loading={loading}
            loadingPosition="start"
            startIcon={<SendIcon />}
            variant="contained">Get Data From API</LoadingButton>
          <ListComponent />
          <QRText />
          <ul className="item-list">{myList}</ul>
        </CardActions>
      </Card>
    </div> 
    </DataContext.Provider>
  );
}

export default App;
