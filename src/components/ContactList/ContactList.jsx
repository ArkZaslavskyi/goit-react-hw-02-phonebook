import Contact from "components/Contact";
import {Contacts}  from './ContactList.styled.js'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <>
            {contacts.length !== 0 &&
            <Contacts>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        onDelete={onDelete}
                    />))}
            </Contacts>}
    </>
)};

export default ContactList;