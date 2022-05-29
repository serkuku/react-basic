import PropertyItem from "./PropertyItem";

function ListComponent() {
  const data = [
    { name: "Desktop computer", amount: "20000" },
    { name: "Laptop computer", amount: "25000" },
    { name: "Printer", amount: "3000" },
    { name: "Table", amount: "3000" },
    { name: "Chair", amount: "2000" }
  ];
  return (
    <div>
      <ul className="item-list">
        {data.map((element,key) => {
          return <PropertyItem {...element} key={key} />;
        })}
      </ul>
    </div>
  );
}

export default ListComponent;
