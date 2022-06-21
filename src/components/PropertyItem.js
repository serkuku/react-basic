import './Item.css'
import PropTypes from 'prop-types';
import DataContext from "../data/DataContext";
import { useContext } from 'react';



const PropertyItem = ({title,amount},key) => {
  const status = amount<0 ? "expense":"income"
  const name = useContext(DataContext)
  return (
    <li className={status}>
      <span>{title}</span><span>{amount}</span>
      <DataContext.Consumer>{value=><span>{value}</span>}</DataContext.Consumer>
      <span>{name}</span>
    </li>
  );
};

PropertyItem.propTypes={
  title:PropTypes.string,
  amount:PropTypes.number
}
export default PropertyItem;
