import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/smallScreen.PNG";
import SmallGameModal from "../modals/SmallGameModal";

const SmallGame = () => {
  const alt = "Small game screen";
  const h4Header = "Game Screen";
  const h4Title = "Small Game Screen";
  const modal = "smallScreenModal";
  const modalId = `#${modal}`;
  const CallModal = SmallGameModal;

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

export default SmallGame;
