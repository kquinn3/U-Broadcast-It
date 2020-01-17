import React, { Fragment } from "react";
import PropTypes from "prop-types";

const MessageItem = ({ message, id }) => {
  const convertDate = d => {
    const _d = new Date(d);
    let _am = "";
    let _h = _d.getHours();
    if (_h >= 12) _am = "PM";
    else _am = "AM";
    if (_h > 12) _h -= 12;
    return `${_d.getMonth() +
      1}-${_d.getDate()} ${_h}:${_d.getMinutes()}${_am}`;
  };

  return (
    <Fragment>
      <tr key={id} className="f-xs">
        <td>{convertDate(message.createdAt)}</td>
        <td>{message.user.substring(0, 12)}</td>
        <td className="text-left">{message.gameMessage}</td>
      </tr>
    </Fragment>
  );
};

export default MessageItem;
