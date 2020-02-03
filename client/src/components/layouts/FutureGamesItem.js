import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FutureGamesItem = ({
  game: { newDate, scoreboardUrl, sport, name, status }
}) => {
  return (
    <Fragment>
      <tr
        className={
          status === "scheduled"
            ? "table-warning d-flex"
            : status === "active"
            ? "table-success d-flex"
            : "table-danger d-flex"
        }
      >
        <td className="col-2 d-md-none">{newDate.substr(4, 6)}</td>
        <td className="col-2 d-none d-md-block">{newDate.substr(4, 11)}</td>
        <td className="col-2 col-md-1">{newDate.substr(16, 5)}</td>
        <td className="d-none d-md-block col-md-2 text-capitalize">{sport}</td>
        {/* <td className="col-2">{sport}</td> */}
        <td className="d-none d-md-block col text-capitalize">{name.team1}</td>
        <td className="d-none d-md-block col text-capitalize">{name.team2}</td>
        <td className="d-md-none col  text-capitalize">
          {name.team1.substr(0, 12)}
        </td>
        <td className="d-md-none col text-capitalize">
          {name.team2.substr(0, 12)}
        </td>
        <td className="d-md-none col-1">
          <Link to={scoreboardUrl}>
            {sport === "hockey" && <i className="fas fa-hockey-puck" />}
          </Link>
        </td>
        <td className="d-none d-md-block col-1">
          <Link to={scoreboardUrl}>View</Link>
        </td>
      </tr>
    </Fragment>
  );
};

export default FutureGamesItem;
