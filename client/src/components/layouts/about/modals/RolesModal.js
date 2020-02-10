import React, { Fragment } from "react";

const ProfileModal = (
  <Fragment>
    <ul className="list-unstyled text-left">
      <li className="my-3">
        <b className="lead">Broadcaster </b> can register a game and email the
        link in advance. Must attend the game and operate the scoreboard. The
        broadcaster can also send messages.
      </li>
      <li className="my-3">
        <b className="lead">User </b> can send messages and view any games.
      </li>
      <li className="my-3">
        <b className="lead">Guest </b> No registration is needed and any guest
        can view all games and all messages
      </li>
    </ul>
  </Fragment>
);

export default ProfileModal;
