import React, { Fragment } from "react";
import AboutSquare from "./AboutSquare";
import SquareModal from "../modals/SquareModal";

import SquareImg from "../../../../assets/img/about_page/schedule.PNG";
import ScheduleModal from "../modals/ScheduleModal";

const Schedule = () => {
  const alt = "Schedule game page";
  const h4Header = "Schedule A Game";
  const h4Title = "Scheduling A Game is Easy";
  const modal = "scheduleModal";
  const modalId = `#${modal}`;
  const CallModal = ScheduleModal;

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

export default Schedule;
