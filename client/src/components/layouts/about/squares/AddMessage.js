import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/messages.PNG";
import AddMessageModal from "../modals/AddMessageModal";

const AddMessage = () => {
  const alt = "Adding Message screen";
  const h4Header = "Adding Messages";
  const h4Title = "Message Instructions";
  const modal = "messageModal";
  const modalId = `#${modal}`;
  const CallModal = AddMessageModal;

  return (
    <Fragment>
      <AboutSquare
        h4Header={h4Header}
        h4Title={h4Title}
        imgSrc={SquareImg}
        imgAlt={alt}
        squareModal={modalId}
      />
      <SquareModal
        modal={modal}
        h4Header={h4Header}
        alt={alt}
        SquareImg={SquareImg}
        modalText={CallModal}
      />
    </Fragment>
  );
};
export default AddMessage;
