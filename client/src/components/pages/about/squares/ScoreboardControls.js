import React, { Fragment } from "react";
import SquareImg from "../../../../assets/img/about_page/scoreboardControls.PNG";
import AboutSquare from "./AboutSquare";

const ScoreboardControls= () => {
  const alt="Scoreboard Control view"
  const h4Header="Scoreboard Controls" 
  const h4Title="Scoreboard Instructions"
  
  const modal="scoreboardControlModal"
  const modalId=`#${modal}`
  return (
    <Fragment>
        
        <AboutSquare h4Header={h4Header} h4Title={h4Title} imgSrc={SquareImg} imgAlt={alt} squareModal={modalId} />
          
            
          
      <div className="modal" id={modal}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title bg-primary text-light ">{h4Header}</h5>
            <button className="close" data-dismiss="modal">&times;</button>
          </div>
          <div className="modal-body">
          <img  className="card-img img-fluid" src={SquareImg} alt={alt} />
          <ul className="list-unstyled text-left">
          <li className="my-3"><b className="lead">Broadcaster </b> can register a game and email the link in advance. Must attend the game and operate the scoreboard. The broadcaster can also send messages.</li>
          <li className="my-3"><b className="lead">User </b> can send messages and view any games.</li>
          <li className="my-3"><b className="lead">Guest </b> No registration is needed and any guest can view all games and all messages</li>
          </ul>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary text-light" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default ScoreboardControls;
