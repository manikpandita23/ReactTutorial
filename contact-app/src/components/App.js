import React from "react";
import 'C:/Users/manik/OneDrive/Desktop/Github/ReactTutorial/contact-app/src/App.css'; 
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const contacts = [
    {
      id:"1",
      name:"Manik",
      email:"manik@gmail.com",
    },
    {
      id:"2",
      name: "abc",
      email:"abc@gmail.com",
    }
  ];
  return <div>
    <Header/>
    <AddContact/>
    <ContactList contacts = {contacts}/>
  </div>;
}

export default App;
