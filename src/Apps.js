
import { useState } from "react";
import './App.css';
const url = "https://jsonplaceholder.typicode.com/todos"
let response = []
function App() {
    
       
      
    const getData = async () =>{
      let text = await fetch(url, {
        method: "GET" // default, so we can ignore
      })
    response = await text.json()
    setDataList(response)
    console.log(response)
    }
    

  
  const [dataList, setDataList] = useState([]);
  console.log(dataList.length);
    // const animal = [
    //   { id: 1, animal: "Dog" },
    //   { id: 2, animal: "Bird" },
    //   { id: 3, animal: "Cat" },
    //   { id: 4, animal: "Mouse" },
    //   { id: 5, animal: "Horse" }
    // ];
      
    const getAnimalsContent = animals => {
        let content = [];
        for (let i=0;i<animals.length;i++) {
          const item = animals[i];
          content.push(<li key={i}>{item.title}</li>);
        }
        return content;
      };

   const test = getAnimalsContent(response)
   
    // const getAnimalsContent = animals => {
    //   let content = [];
    //   for (let idx in animals) {
    //     const item = animals[idx];
    //     content.push(<li key={item.id}>{item.animal}</li>);
    //   }
    //   return content;
    // };
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>test</h1>
        <button onClick={getData} />
          {test}
      </header>
    </div>
  );
}

export default App;
