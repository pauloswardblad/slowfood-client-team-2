import React from "react";

const RegistrationForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id="register-form">
      <label>Name</label>
      <input name="name" type="name" id="name"></input>
      
      <label>Email</label>
      <input name="email" type="email" id="email"></input>

      <label>Password</label>
      <input name="password" type="password" id="password"></input>

      <label>Password Confirmation</label>
      <input name="password" type="password" id="confirm-password"></input>

      <button id="create-button">Create</button>
    </form>
  );
};

export default RegistrationForm;