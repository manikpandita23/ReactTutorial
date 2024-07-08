import React, {userState, useState} from "react";
import 'C:/Users/manik/OneDrive/Desktop/Github/ReactTutorial/contact-app/src/App.css'; 
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts]= useState([]);
return (
  <div className="ui container">
    <Header />
    <AddContact />
    <ContactList contacts={contacts}/>

  </div>
  );
}

export default App;
