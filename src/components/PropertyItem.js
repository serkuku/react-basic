import './Item.css'
import PropTypes from 'prop-types';

const PropertyItem = ({title,amount},key) => {
  const status = amount<0 ? "expense":"income"
  return (
    <li className={status}><span>{title}</span><span>{amount}</span></li>
  );
};

PropertyItem.propTypes={
  title:PropTypes.string,
  amount:PropTypes.number
}
export default PropertyItem;
