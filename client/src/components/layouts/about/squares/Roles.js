import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/elizabeth_christina.jpeg";
import RolesModal from "../modals/RolesModal";

const Roles = () => {
  const alt = "Two people watching hockey";
  const h4Header = "Roles & Registration";
  const h4Title = "Determine Your Role";
  const modal = "rolesModal";
  const modalId = `#${modal}`;
  const CallModal = RolesModal;

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

export default Roles;
