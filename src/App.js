import Axios from "axios";
import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import ListComponent from "./components/ListComponent";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';


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
    // setLoading(false);
  };
  let myList = [];
  for (let i = 0; i < dataList.length; i++) {
      if(i===10) break
      myList.push(<Item name={dataList[i]} key={i} />);
  }
  console.log(dataList.length);
  console.log(myList);

  return (
    <div className="">
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <div className="container"><CardMedia
        component="img"
        sx={{width:"50%"}}
        image="../../images/satunpao.png"
        alt="satunpao logo"
      /></div>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          อบจ.สตูล
        </Typography>
        <Typography variant="body2" color="text.secondary">
        เรียกข้อมูลจาก API
        </Typography>
      </CardContent>
      
      <CardActions sx={{flexDirection:"column"}}>
        <LoadingButton
            size="small"
            color="secondary"
            onClick={getData}
            onChange={() => setLoading(!loading)}
            loading={loading}
            loadingPosition="start"
            startIcon={<SendIcon />}
            variant="contained"
          >Get Data From API</LoadingButton>
        <ListComponent />
      </CardActions>
      </CardActionArea>
    </Card>
      
      {/* <button onClick={getData}>Get Data From API</button> */}
      {/* <LoadingButton
          size="small"
          color="secondary"
          onClick={getData}
          onChange={() => setLoading(!loading)}
          loading={loading}
          loadingPosition="start"
          startIcon={<SendIcon />}
          variant="contained"
        >Get Data From API</LoadingButton>
       */}
    
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
