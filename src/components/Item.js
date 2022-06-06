import './Item.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Item = ({name},key) => {
  return (
     <List
      sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}
      aria-label="contacts"
    >
      <ListItem disablePadding >
          <ListItemText primary={name.id}/>
          <ListItemText primary={name.title}/>
          <ListItemText primary={name.body}/>
      </ListItem>
    </List>
  );
};

export default Item;
