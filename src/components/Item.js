import './Item.css'

const Item = ({name},key) => {
  return (
    <li ><span>{name.id}</span><span>{name.body}</span><span>{name.title}</span></li>
  );
};

export default Item;
