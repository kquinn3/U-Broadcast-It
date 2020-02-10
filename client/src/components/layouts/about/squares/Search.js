import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/all_search.PNG";
import SearchModal from "../modals/SearchModal";

const Search = () => {
  const alt = "Filtered search page";
  const h4Header = "Filtered Search";
  const h4Title = "Filter by Team and Sport";
  const modal = "filterSeaarchModal";
  const modalId = `#${modal}`;
  const CallModal = SearchModal;

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

export default Search;
