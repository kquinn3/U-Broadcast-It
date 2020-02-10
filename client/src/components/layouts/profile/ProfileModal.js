import React, { Fragment } from "react";

const ProfileModal = ({ modalType, modalId, newVal, onChange, btnClick }) => {
  let modalh5, btnTxt, inputName, inputType, placeHolder;
  switch (modalType) {
    case "radius":
      modalh5 = "Search Radius";
      btnTxt = "Change Radius";
      inputName = "newRad";
      inputType = "number";
      placeHolder = "New Radius in Miles";
      break;
    case "zipcode":
      modalh5 = "Zipcode";
      btnTxt = "Change Zipcode";
      inputName = "newZip";
      inputType = "number";
      placeHolder = "New Zipcode";
      break;
    case "favoriteTeam":
      modalh5 = "Favorite Team";
      btnTxt = "Change Team";
      inputName = "newFavTeam";
      inputType = "text";
      placeHolder = "Favorite Team";
      break;
  }

  return (
    <Fragment>
      <div className="modal" id={modalId}>
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">{modalh5}</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type={inputType}
                  placeholder={placeHolder}
                  name={inputName}
                  value={newVal}
                  onChange={onChange}
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-warning mx-3" data-dismiss="modal">
                Cancel
              </button>
              <button
                onClick={btnClick}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                {btnTxt}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileModal;
