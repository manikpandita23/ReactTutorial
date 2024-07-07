import React from "react";

class AddContact extends React.Component{
    render (){
        return (
            <div className="UI Main">
                <h2> AddContact</h2>
                <form className = "UI form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                        
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                        
                    </div>
                    <button className="UI Button blue">Add</button>


                </form>
            </div>


        );
    }

}

export default AddContact