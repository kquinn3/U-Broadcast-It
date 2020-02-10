import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/ideas.jpg";
import LeaveSuggestionsModal from "../modals/LeaveSuggestionsModal";

const LeaveSuggestion = () => {
  const alt = "Two people at a drawing board";
  const h4Header = "Leave Suggestions";
  const h4Title = "I'd Love to Hear From You";
  const modal = "suggestionModal";
  const modalId = `#${modal}`;
  const CallModal = LeaveSuggestionsModal;

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
export default LeaveSuggestion;
