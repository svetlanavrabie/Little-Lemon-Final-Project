import React from "react";
import "../styles/SuccesfullyLogged.css";

const SuccesfullyLogged = () => {
  const username = localStorage.getItem("username").toUpperCase();
  const userlastname = localStorage.getItem("userlastname").toUpperCase();

  return (
    <div className="home">
      <h2>Succesfully!</h2>
      {username && userlastname && (
        <p>
          You are logged as:{" "}
          <strong>
            {username} {userlastname}
          </strong>
        </p>
      )}
      <p>
        Thank you for signing in, you can proceed to place an online order or
        book a table in our restaurant!{" "}
      </p>
    </div>
  );
};

export default SuccesfullyLogged;
