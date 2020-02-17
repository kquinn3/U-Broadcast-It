import React, { Fragment } from "react";

const MessageItem = ({ message, id }) => {
  const convertDate = d => {
    const _d = new Date(d);
    let _am = "";
    let _h = _d.getHours();
    let _m = _d.getMinutes();
    if (_m < 10) _m = `0${_m}`;
    if (_h >= 12) _am = "PM";
    else _am = "AM";
    if (_h > 12) _h -= 12;
    return `${_d.getMonth() + 1}-${_d.getDate()} ${_h}:${_m}${_am}`;
  };

  return (
    <Fragment>
      <tr key={id} className="f-xs">
        <td>{convertDate(message.createdAt)}</td>
        <td>{message.user}</td>
        <td className="text-left">{message.gameMessage}</td>
      </tr>
    </Fragment>
  );
};

export default MessageItem;
