import React, { Fragment } from "react";

const UpdateItem = ({ update, id }) => {
  return (
    <Fragment>
      <tr key={id} className="f-xs">
        <td>
          {update.scoreboard.time.minutes < 10 && "0"}
          {update.scoreboard.time.minutes}:
          {update.scoreboard.time.seconds < 10 && "0"}
          {update.scoreboard.time.seconds}
        </td>
        <td className="text-left">{update.scoreboard.gameUpdate}</td>
        <td>{update.scoreboard.score1}</td>
        <td>{update.scoreboard.score2}</td>
      </tr>
    </Fragment>
  );
};

export default UpdateItem;
