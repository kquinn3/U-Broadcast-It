import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UpdateItem from "./UpdateItem";

const Updates = ({
  game: {
    updates,
    name: { team1, team2 }
  }
}) => {
  const [periodSel, setPeriodSel] = useState(1);

  const onPeriod = e => {
    e.preventDefault();

    document
      .getElementById(`period${periodSel}`)
      .classList.remove("period-button");
    document.getElementById(`${e.target.id}`).classList.add("period-button");
    switch (e.target.id) {
      case "period1": {
        setPeriodSel(1);
        break;
      }
      case "period2": {
        setPeriodSel(2);
        break;
      }
      case "period3": {
        setPeriodSel(3);
        break;
      }
    }
  };

  const periodButtons = (
    <Fragment>
      <div className="mb-3 btn-group text-center w-100">
        <input
          id="period1"
          className="period-button btn btn-light"
          type="button"
          value="1st"
          onClick={onPeriod}
        />
        <input
          id="period2"
          className="btn btn-light"
          type="button"
          value="2nd"
          onClick={onPeriod}
        />
        <input
          id="period3"
          className="btn btn-light"
          type="button"
          value="3rd"
          onClick={onPeriod}
        />
      </div>
    </Fragment>
  );

  const updateTableHeader = (
    <Fragment>
      <thead className="f-sm">
        <tr>
          <th width="11%">Time</th>
          <th width="75%">Play</th>
          <th width="7%">{team1.substring(0, 3)}</th>
          <th width="7%">{team2.substring(0, 3)}</th>
        </tr>
      </thead>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="update-container">
        {periodButtons}
        <table className="table table-striped">
          {updateTableHeader}
          <tbody>
            {updates !== null &&
              updates
                .filter(
                  up =>
                    up.scoreboard.gameUpdate !== "" &&
                    up.scoreboard.period === periodSel
                )
                .map(up => <UpdateItem update={up} key={up._id} id={up._id} />)}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

Updates.propTypes = {
  game: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game
});

export default connect(mapStateToProps, null)(Updates);
