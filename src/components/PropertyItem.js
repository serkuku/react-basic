import './Item.css'
import PropTypes from 'prop-types';
import DataContext from "../data/DataContext";
import { useContext } from 'react';



const PropertyItem = ({title,amount},key) => {
  const status = amount<0 ? "expense":"income"
  const {income,expense} = useContext(DataContext)
  return (
    <li className={status}>
      <span>{title}</span><span>{amount}</span>
      {/* <DataContext.Consumer>{context=><span>{context.income}{context.expense}</span>}</DataContext.Consumer> */}
      <span>รับ:{income}จ่าย:{expense}</span>
    </li>
  );
};

PropertyItem.propTypes={
  title:PropTypes.string,
  amount:PropTypes.number
}
export default PropertyItem;
