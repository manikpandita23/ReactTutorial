import React from "react";
import userImage from "../images/user.png";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{ color: "red", marginTop: "7px" }}>
            <img className="ui avatar image" src={userImage} alt="user" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
        </div>
    );
};

export default ContactCard;
