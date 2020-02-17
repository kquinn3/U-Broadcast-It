import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MessageItem from "./MessageItem";

const Messages = ({
  game: { messages, gameId, sport, socket },
  user: { isAuthenticated, user }
}) => {
  const [txtMessage, setTxtMessage] = useState("");

  const updateTableHeader = (
    <Fragment>
      <thead className="f-xs">
        <tr>
          <th width="18%"></th>
          <th width="12%"></th>
          <th width="70%"></th>
        </tr>
      </thead>
    </Fragment>
  );

  const onChangeTxtMessage = e => {
    e.preventDefault();
    setTxtMessage(e.target.value);
  };
  const onSendMessage = e => {
    e.preventDefault();
    if (txtMessage !== "") {
      socket.emit(`game_update`, {
        gameId: gameId,
        user: user,
        sport: sport,
        code: "game_message",
        scoreboard: {
          txtMessage
        }
      });
    }
    setTxtMessage("");
  };

  const editMessage = (
    <Fragment>
      <div className="input-group">
        <input
          type="text"
          name="txtMessage"
          value={txtMessage}
          onChange={onChangeTxtMessage}
          className={
            isAuthenticated
              ? "form-control bg-warning w-100M text-center margin-auto-3b"
              : "form-control bg-warning disable-pointer w-100M text-center margin-auto-3b"
          }
          placeholder={
            isAuthenticated ? "Enter Message" : "Create an account to send"
          }
          disabled={!isAuthenticated}
        />
      </div>
      <div className="input-group">
        <button
          disabled={!isAuthenticated}
          onClick={isAuthenticated && onSendMessage}
          className={
            isAuthenticated
              ? " btn form-control bg-warning w-100M margin-auto-3"
              : " btn form-control bg-warning disable-pointer w-100M margin-auto-3"
          }
        >
          Send
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <div className="message-container">
        {/* <h3 className="d-none d-md-block">Messages</h3> */}
        {/* {isAuthenticated ? editMessage : showMessage} */}
        {editMessage}
        <table className="table table-striped">
          {updateTableHeader}
          <tbody>
            {messages !== null &&
              messages.map(msg => (
                <MessageItem message={msg} key={msg._id} id={msg._id} />
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

Messages.propTypes = {
  game: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  game: state.game,
  user: state.user
});

export default connect(mapStateToProps, null)(Messages);
