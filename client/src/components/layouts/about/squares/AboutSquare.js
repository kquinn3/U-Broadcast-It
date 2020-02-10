import React, { Fragment } from "react";


const AboutSquare= ({h4Header,h4Title,imgSrc,imgAlt,squareModal}) => {
  return (
      
    
    <Fragment>
      <div className="col-12 col-md-6 col-lg-4 about">
        <div className="card my-3">
          
          <div className="card-header bg-primary text-light">
            <h4>{h4Header}</h4>
          </div>
          <div className="card-body bg-light">
          <button data-toggle="modal" data-target={squareModal}>
            <img  className="card-img img-fluid" src={imgSrc} alt={imgAlt} />
            
          
          </button>
          <h4 className="card-title my-3">{h4Title}</h4>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};
export default AboutSquare;