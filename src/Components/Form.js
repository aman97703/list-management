import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const BackButton = styled.button`
  position: absolute;
  top: -25px;
  left: 10px;
`;

const RelativeForm = styled.form`
  position: relative;
`;

const Form = ({ setUsers, setState }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const [newUser, setNewUser] = useState({
    id: nanoid(),
    name: "",
    email: "",
    phone: "",
  });
  const addUser = (e) => {
    e.preventDefault();
    if (!newUser.name) {
      return toast.warning("Enter valid name");
    }
    if (!emailRegex.test(newUser.email)) {
      return toast.warning("Enter valid email");
    }
    if (!phoneRegex.test(newUser.phone)) {
      return toast.warning("Enter valid phone number");
    }
    setUsers((prev) => [...prev, newUser]);
    setNewUser({
      id: nanoid(),
      name: "",
      email: "",
      phone: "",
    });
    setState(0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="users_root">
      <RelativeForm className="user_form">
        <BackButton onClick={() => setState(0)}>Back</BackButton>
        <input
          type="text"
          className="mt-24 w-100"
          placeholder="Enter your name..."
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="email"
          className="mt-24 w-100"
          placeholder="Enter your email..."
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="mt-24 w-100"
          placeholder="Enter your phone Number"
          name="phone"
          value={newUser.phone}
          onChange={handleChange}
        />
        <button className="mt-24" onClick={addUser}>
          Add User
        </button>
      </RelativeForm>
    </div>
  );
};

export default Form;
