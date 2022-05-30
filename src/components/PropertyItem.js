import './Item.css'

const PropertyItem = ({title,amount},key) => {
  return (
    <li ><span>{title}</span><span>{amount}</span></li>
  );
};

export default PropertyItem;
