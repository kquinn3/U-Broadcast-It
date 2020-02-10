import React, { Fragment } from "react";

const AddMessageModal = (
  <Fragment>
    <h6 className="text-left my-3">
      If you are registered and logged in, you can enter a message and hit send
      to send the message.
    </h6>
    <h6 className="text-left my-3">
      The message button will still be shown if you are not logged in, but will
      not be activated.
    </h6>
    <h6 className="text-left my-3">
      The message will display once the "send" button is clicked.
    </h6>
  </Fragment>
);

export default AddMessageModal;
