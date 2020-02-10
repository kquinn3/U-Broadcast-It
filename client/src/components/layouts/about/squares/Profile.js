import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

// Change up to the return for each square
import SquareImg from "../../../../assets/img/about_page/dashboard.PNG";
import ProfileModal from "../modals/ProfileModal";

const Profile = () => {
  const alt = "Profile Page";
  const h4Header = "Profile & Broadcasts";
  const h4Title = "Profile & Broadcasts";
  const modal = "profileModal";
  const modalId = `#${modal}`;
  const CallModal = ProfileModal;

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
export default Profile;
