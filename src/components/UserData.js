import React, { useState } from "react";
import { useLocalState } from "../custom-hook";
const UserData = () => {
  const [name, setName] = useLocalState("name", "Krish");
  const [email, setEmail] = useLocalState("email", "Krish@.com");
  const [phone, setPhone] = useLocalState("phone", "8989989889");
  const [age, setAge] = useLocalState("age", 25);
  const [address, setAddress] = useLocalState("address", {
    state: "karnataka",
    city: "delhi",
  });

  return (
    <>
      <div className="container">
        <h1>Customer hook demo</h1>
        <hr />
        <div className="row">
          <div className="col-md-4">
            {/* form here */}
            <h3>New user data</h3>
            <form onSubmit={(evt) => evt.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="nameInput"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phoneInput"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="col-md-4">
            {/* state data here */}

            <p className="lead">Name: {name}</p>
            <p className="lead">Email: {email}</p>
            <p className="lead">Phone: {phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
