import PropTypes from 'prop-types';
import { IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactsListItem = ({ id, name, number, onDelete }) => {
  const handleDeleteClick = evt => {
    onDelete(evt.target.id);
  };
  return (
    <ListItem key={id} alignItems="flex-start">
      <ListItemText variant="body1" component="span" sx={{ mr: '10px' }}>
        {name}
      </ListItemText>
      <ListItemText variant="body1" component="span" sx={{ mr: '10px' }}>
        {number}
      </ListItemText>
      <IconButton id={id} type="button" onClick={handleDeleteClick}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default ContactsListItem;

ContactsListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};
