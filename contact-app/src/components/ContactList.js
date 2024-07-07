import React from "react";
import ContactCard from "./ContactCard";


const ContactList = (props)=> {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}></ContactCard>
        );
    });
    return (
        <div className="UI Called List">{renderContactList}</div>
    );
};

export default ContactList;
