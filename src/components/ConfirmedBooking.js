import React from "react";
import confirmImg from "../assets/images/bookingConfirmed.png";

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  width: "auto",
  fontSize: "1rem",
  fontWeight: "bold",
  color: "green",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "1rem",
};
const ConfirmedBooking = () => {
  return (
    <div style={style}>
      <img src={confirmImg} alt="" />
      <h1> The booking was Confirmed!</h1>
    </div>
  );
};

export default ConfirmedBooking;
