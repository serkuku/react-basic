import PropertyItem from "./PropertyItem";
import { useState,useEffect } from "react";
import FormComponent from "./FormComponent";
import DataContext from "../data/DataContext";


function ListComponent() {
  // const data = [
  //   { title: "Desktop computer", amount: 20000 },
  //   { title: "Laptop computer", amount: 25000 },
  //   { title: "Printer", amount: -3000 },
  //   { title: "Table", amount: -3000 },
  //   { title: "Chair", amount: 2000 },
  // ];
  const [dataItem, setDataItem] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    setDataItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = dataItem.map(dataItem=>dataItem.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)
    const tot = amounts.reduce((total,element)=>total+=element,0)

    setReportIncome(income);
    setReportExpense(expense);
    console.log(tot);
  }, [dataItem,reportIncome,reportExpense])
  
  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense: reportExpense
      }
    }>
    <div className="form-control">
        <FormComponent onAddItem={onAddNewItem} />
      <div >
        <ul className="item-list">
          {dataItem.map((element, key) => {
            return <PropertyItem {...element} key={key}  />;
          })}
        </ul>
        
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default ListComponent;
