import React from "react";

const ContactCard = (props)=>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
                <div className="content">
                  <div className="header">{name}</div>
                  <div> {email}</div>  
                </div>
                <i className="Trash alternate outline icon"></i>
                style = {{color:"red", marginTop:"7px"}}
            </div>
    );
};
export default ContactCard;