import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import { scheduleGame, clearGameSchedule } from "../../actions/gameActions";
import { setAlert } from "../../actions/alertActions";
import PropTypes from "prop-types";

//Schedule a game broadcast
const ScheduleGame = ({
  game: { isGameScheduled },
  scheduleGame,
  clearGameSchedule,
  setAlert,
  history
}) => {
  //Create state in context for the broadcast inputs
  const [scheduleIN, setScheduleIN] = useState({
    address: "",
    date: Date.now(),
    team1: "",
    team2: "",
    sport: "hockey"
  });

  //ClearGameFlag is run after a successful game was scheduled. This sets the flag to false and redirects to the home page
  const clearGameFlag = () => {
    setAlert("Broadcast has been scheduled", "success");
    clearGameSchedule();
    history.push("/");
  };

  //Destructure scheduleIN. ScheduleIN is used only in the form.
  const { address, date, team1, team2, sport } = scheduleIN;
  useEffect(() => {
    if (isGameScheduled) {
      clearGameFlag();
    }
    // eslint-disable-next-line
  }, [isGameScheduled]);

  //Clear all user entries in the state
  const clearState = () => {
    setScheduleIN({
      address: "",
      date: Date.now(),
      team1: "",
      team2: "",
      sport: "hockey"
    });
  };

  //Get all inputs
  const onChange = e => {
    setScheduleIN({ ...scheduleIN, [e.target.name]: e.target.value });
  };

  const onChangeDate = e => {
    setScheduleIN({ ...scheduleIN, date: e });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (address === "" || team1 === "" || team2 === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      const scheduleItem = {
        address,
        eventTime: date,
        status: "scheduled",
        name: { team1, team2 },
        sport: sport
      };

      scheduleGame(scheduleItem);
      clearState();
    }
  };

  return (
    <section className="form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card bg-white p-4 mb-4">
              <div className="card-body">
                <h1 className="text-center mb-3">
                  <i className="fas fa-calendar-alt"></i> Schedule a Game
                </h1>
                <p>
                  Schedule a future game. Once done you will be provided a link
                  that you can email to fans interested in tracking the game
                </p>
                <form onSubmit={onSubmit}>
                  <div className="form-group mt-4">
                    <label htmlFor="name">Address of Game</label>
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      value={address}
                      placeholder="Enter Address of game (street,city,state,zip)"
                      required
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Date & Time of event</label>
                    {/* <input
                      className="form-control"
                      type="text"
                      name="date"
                      value={date}
                      placeholder="Enter date"
                      required
                      onChange={onChange}
                    /> */}
                    <br />
                    <DatePicker
                      className="form-control"
                      selected={date}
                      name="date"
                      value={date}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      timeCaption="time"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      onChange={onChangeDate}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="team1">Road Team Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="team1"
                      value={team1}
                      placeholder="Enter road team name"
                      required
                      onChange={onChange}
                      minLength="6"
                      maxLength="20"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="team1">Home Team Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="team2"
                      value={team2}
                      placeholder="Enter home team name"
                      required
                      onChange={onChange}
                      minLength="6"
                      maxLength="20"
                    />
                  </div>

                  <div className="card card-body mb-3">
                    <h5 className="mb-2">Enter the sport</h5>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sport"
                        value="hockey"
                        defaultChecked
                        onChange={onChange}
                      />
                      <label className="form-check-label">Hockey</label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sport"
                        value="football"
                        onChange={onChange}
                        disabled
                      />
                      <label className="form-check-label">Football</label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sport"
                        value="baseball"
                        onChange={onChange}
                        disabled
                      />
                      <label className="form-check-label">Baseball</label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sport"
                        value="basketball"
                        onChange={onChange}
                        disabled
                      />
                      <label className="form-check-label">Basketball</label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sport"
                        value="soccer"
                        onChange={onChange}
                        disabled
                      />
                      <label className="form-check-label">Soccer</label>
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="sport"
                        value="lacrosse"
                        onChange={onChange}
                        disabled
                      />
                      <label className="form-check-label">Lacrosse</label>
                    </div>
                    <p className="text-danger">
                      * The only available sport is hockey
                    </p>
                  </div>

                  <input
                    type="submit"
                    value="Schedule"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ScheduleGame.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, {
  scheduleGame,
  clearGameSchedule,
  setAlert
})(ScheduleGame);
