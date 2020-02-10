import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/scoreboardControls.PNG";
import ScoreboardControlsModal from "../modals/ScoreboardControlsModal";

const ScoreboardControls = () => {
  const alt = "Scoreboard Control view";
  const h4Header = "Scoreboard Controls";
  const h4Title = "Scoreboard Instructions";
  const modal = "scoreboardControlModal";
  const modalId = `#${modal}`;
  const CallModal = ScoreboardControlsModal;

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
export default ScoreboardControls;
