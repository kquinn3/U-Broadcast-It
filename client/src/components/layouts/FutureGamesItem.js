import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FutureGamesItem = ({
  game: { newDate, scoreboardUrl, eventType, name }
}) => {
  return (
    <Fragment>
      <tr>
        <td>{newDate.substr(4, 11)}</td>
        <td>{newDate.substr(16, 5)}</td>
        <td className="d-none d-md-block">{eventType}</td>
        <td>{name.team1}</td>
        <td>{name.team2}</td>
        <td>
          <Link to={scoreboardUrl}>View</Link>
        </td>
      </tr>
    </Fragment>
  );
};

export default FutureGamesItem;
