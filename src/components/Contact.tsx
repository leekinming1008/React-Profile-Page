import "./Contact.css";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      "Your name is " +
        name +
        " , your email is " +
        email +
        " and your message is " +
        message
    );
  };

  return (
    <div className="Contact">
      <form id="contact-form" onSubmit={handleSubmit}>
        <h1>Welcome to leave a message to me :))</h1>
        <label>User Name: </label>
        <input
          type="text"
          name="userName"
          placeholder="Please enter your full name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Email Address: </label>
        <input
          type="text"
          name="email"
          placeholder="Please enter your email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></input>
        <label>Message To Me: </label>
        <input
          type="text"
          name="message"
          placeholder="Please leave a message..."
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></input>
        {message.length > 10 ? (
          <button type="submit">Sent the message</button>
        ) : (
          <button type="submit" disabled>
            Sent the message
          </button>
        )}
      </form>
    </div>
  );
};

export default Contact;
