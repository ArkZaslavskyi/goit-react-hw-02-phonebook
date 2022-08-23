import PropTypes from 'prop-types'; 
import { ListItem, ContactName, ContacPhone, DeleteBtn } from './Contact.styled.js';

const Contact = ({ id, name, number, onDelete }) => (
    <ListItem>
        <ContactName>{name}</ContactName>
        <ContacPhone>{number}</ContacPhone>
        <DeleteBtn
            type="button"
            onClick={() => onDelete(id)}>Delete</DeleteBtn>
    </ListItem>
);

export default Contact;

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};