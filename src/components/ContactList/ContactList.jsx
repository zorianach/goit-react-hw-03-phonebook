// import ContactItem from "components/ContactItem/ContactItem"
// import PropTypes from 'prop-types'
import { ContactListStyle, ContactItem, Line, DeleteButton} from "./ContactList.styled";
// import { nanoid } from "nanoid";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <ContactListStyle>
            {contacts.map(({name, number, id}) => {
                return (
                <>
                <ContactItem key={id} >
                    <Line>{name}: {number}</Line>
                    <DeleteButton type="button" onClick={() => onDelete(id)}>Delete</DeleteButton>
                </ContactItem>
                </>
            )})}
        </ContactListStyle>
    );
            }
    export default ContactList;
 