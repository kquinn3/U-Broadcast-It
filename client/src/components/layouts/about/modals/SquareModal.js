import React, { Fragment } from "react";

const SquareModal = ({ modal, h4Header, alt, SquareImg, modalText }) => {
  return (
    <Fragment>
      <div className="modal" id={modal}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-block">
              <h5 className="modal-title bg-primary text-light ">{h4Header}</h5>
            </div>
            <div className="modal-body">
              <img className="card-img img-fluid" src={SquareImg} alt={alt} />
              {modalText}
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary text-light"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default SquareModal;
