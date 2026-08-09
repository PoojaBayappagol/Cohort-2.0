import "./index.css";
import React from "react";
import { useState } from "react";

const App = () => {

  const [userName, setuserName] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPhone, setuserPhone] = useState("");

  const [allUsers, setallUsers] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    const oldUsers = [...allUsers];

    oldUsers.push({
      username: userName,
      email: userEmail,
      phone: userPhone
    });

    setuserName("");
    setuserEmail("");
    setuserPhone("");
    setallUsers(oldUsers);
  }

  return (
    <div>

      <form onSubmit={(e) => {
        submitHandler(e);
      }}>

        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          required
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder="Enter your email"
          value={userEmail}
          required
          onChange={(e) => {
            setuserEmail(e.target.value);
          }}
        />

        <input
          type="tel"
          placeholder="Enter your phone"
          value={userPhone}
          required
          onChange={(e) => {
            setuserPhone(e.target.value);
          }}
        />

        <button>Submit</button>

      </form>

      {
        allUsers.map((user, index) => {
          return (
            <div key={index}>
              <h3>{user.username}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          );
        })
      }

    </div>
  );
};

export default App;