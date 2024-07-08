import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
    };

    add = (e)=> {
        e.preventDefault();
        if(this.state.name ==="" && this.state.email ===""){
            alert("All the fields are mandatory");
            return;
        }
    }
    render (){
        return (
            <div className="UI Main">
                <h2> AddContact</h2>
                <form className = "UI form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={(e)=> this.setState({name: e.target.value})} />
                        
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text"
                         name="email"
                          placeholder="Email"
                          value={this.state.email}
                        onChange={(e)=> this.setState({email: e.target.value})} />
                        
                    </div>
                    <button className="UI Button blue">Add</button>


                </form>
            </div>


        );
    }

}

export default AddContact