import PropertyItem from "./PropertyItem";
import { useState } from "react";
import FormComponent from "./FormComponent";

function ListComponent() {
  // const data = [
  //   { title: "Desktop computer", amount: "20000" },
  //   { title: "Laptop computer", amount: "25000" },
  //   { title: "Printer", amount: "3000" },
  //   { title: "Table", amount: "3000" },
  //   { title: "Chair", amount: "2000" },
  // ];
  const [dataItem, setDataItem] = useState([]);
  const onAddNewItem = (newItem) => {
    setDataItem((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  return (
    <div className="form-control">
        <FormComponent onAddItem={onAddNewItem} />
      <div >
        <ul className="item-list">
          {dataItem.map((element, key) => {
            return <PropertyItem {...element} key={key} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ListComponent;
