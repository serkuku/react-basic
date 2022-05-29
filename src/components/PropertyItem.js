import './Item.css'

const PropertyItem = ({name,amount},key) => {
  return (
    <li ><span>{name}</span><span>{amount}</span></li>
  );
};

export default PropertyItem;
