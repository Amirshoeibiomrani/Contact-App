"use client";
import React, { useState } from "react";
import ContactsList from "./ContactsList.1";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log({ name, value });

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      return;
    }
    setAlert("");
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
          className="border"
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandler}
          className="border"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
          className="border"
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
          className="border"
        />
        <button onClick={addHandler} className="border">
          Add Contact
        </button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
