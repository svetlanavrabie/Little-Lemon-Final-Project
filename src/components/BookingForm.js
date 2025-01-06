import React from "react";
import { useState } from "react";
import "../styles/BookingForm.css";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date1, setDate1] = useState(new Date().toDateString());

  // split time and date into arrays based on delimiter
  const timeStr = time.toString().split(" ");
  const dateStr = date1.toString().split(" ");

  // update time and date every 1000 milliseconds
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
    setDate1(new Date().toDateString());
  }, 1000);

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSumbit}>
          <fieldset className="formField">
            <div className="date-time">
              <div className="date">
                {dateStr[2] + " " + dateStr[1] + " " + dateStr[3]}
              </div>
              <div className="time">{timeStr[0] + " " + timeStr[1]}</div>
            </div>

            <div className="choose-date">
              <div>
                <h1 className="guest-title">Guest</h1>
                <input
                  min="1"
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                  }}
                  type={"number"}
                  placeholder={0}
                  max={10}
                  required
                ></input>
              </div>
              <div>
                <h1 className="guest-title">Choose Date:</h1>
                <input
                  className="date-selector"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  type="date"
                  required
                />
              </div>
              <div>
                <h1 className="guest-title">Choose Ocassion:</h1>
                <select
                  className="ocassion-selector"
                  key={occasion}
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  required
                >
                  <option value="">Select an Option</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>

              <div>
                <h1 className="guest-title">Choose Time:</h1>
                <div id="book-time">
                  {props.availableTimes.availableTimes.map((availableTime) => (
                    <label key={availableTime} className="radio-button">
                      <input
                        type="radio"
                        name="book-time"
                        value={availableTime}
                        checked={times === availableTime}
                        onChange={(e) => setTimes(e.target.value)}
                        required
                      />
                      <span>{availableTime}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="btnReceive">
              <button className="btn-reserve" type="submit">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
