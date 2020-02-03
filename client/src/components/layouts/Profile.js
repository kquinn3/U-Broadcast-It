import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUserPreferences, loadUser } from "../../actions/userActions";

const Profile = ({ user: { user }, updateUserPreferences }) => {
  const [newProfile, setNewProfile] = useState({
    newZip: "",
    zipFlag: false,
    newRad: "",
    radFlag: false,
    newFavTeam: [],
    favTeamFlag: false
  });

  const {
    newZip,
    zipFlag,
    newRad,
    radFlag,
    newFavTeam,
    favTeamFlag
  } = newProfile;

  const onSave = async e => {
    e.preventDefault();
    let params = {};
    if (zipFlag) {
      params.zipcode = newZip;
    }
    if (radFlag) {
      params.radius = newRad;
    }
    if (favTeamFlag) {
      params.team = newFavTeam;
    }
    console.log("params", params);
    await updateUserPreferences(params);
    setNewProfile({
      newZip: "",
      zipFlag: false,
      newRad: "",
      radFlag: false,
      newFavTeam: [],
      favTeamFlag: false
    });
  };

  const onDiscard = e => {
    e.preventDefault();
    setNewProfile({
      newZip: "",
      zipFlag: false,
      newRad: "",
      radFlag: false,
      newFavTeam: [],
      favTeamFlag: false
    });
  };

  const onChange = e => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const onZip = e => {
    e.preventDefault();

    const re = /^[0-9]{5}$/;
    if (newZip !== user.zipcode && re.test(newZip))
      setNewProfile({ ...newProfile, zipFlag: true });
    else setNewProfile({ ...newProfile, newZip: "", zipFlag: false });
  };

  const onRad = e => {
    e.preventDefault();

    if (Number(newRad) !== user.radius && newRad > 0)
      setNewProfile({ ...newProfile, radFlag: true });
    else setNewProfile({ ...newProfile, newRad: "", radFlag: false });
  };

  const onFavTeam = e => {
    e.preventDefault();
    const re = /^[a-zA-Z].{3,}[a-zA-Z0-9]$/;
    if (
      newFavTeam !== user.team &&
      newFavTeam.length > 4 &&
      re.test(newFavTeam) === true
    )
      setNewProfile({ ...newProfile, favTeamFlag: true });
    else setNewProfile({ ...newProfile, newFavTeam: "", favTeamFlag: false });
  };

  return (
    <Fragment>
      <div className="card card-body bg-light mb-4">
        <h3 className="text-center">Profile</h3>
        <p className="my-1">{user.name}</p>
        <p className="my-1">Change password (Not done yet)</p>
        <p className="my-1">Role: {user.role}</p>
        <div className="d-flex justify-content-between my-1">
          <p>Search Zipcode</p>
          {zipFlag ? (
            <p className="mx-1 bg-warning">{newZip} </p>
          ) : (
            <p className="mx-1">{user.zipcode} </p>
          )}
          <button data-toggle="modal" data-target="#zipModal">
            <i className="mx-1 fas fa-edit text-primary"></i>
          </button>
        </div>
        <div className="d-flex justify-content-between my-1">
          <p>Search Radius</p>
          {radFlag ? (
            <p className="mx-1 bg-warning">{newRad} </p>
          ) : (
            <p className="mx-1">{user.radius} </p>
          )}

          <button data-toggle="modal" data-target="#radModal">
            <i className="mx-1 fas fa-edit text-primary"></i>
          </button>
        </div>

        <div className="d-flex justify-content-between my-1">
          <p>Favorite Team</p>
          {favTeamFlag ? (
            <p className="mx-1 bg-warning">{newFavTeam} </p>
          ) : (
            <p className="mx-1">{user.team} </p>
          )}
          <button data-toggle="modal" data-target="#favTeamModal">
            <i className="mx-1 fas fa-edit text-primary"></i>
          </button>
        </div>

        {(radFlag || zipFlag || favTeamFlag) && (
          <Fragment>
            <button onClick={onDiscard} className="btn btn-danger my-1">
              Discard Preferences
            </button>
            <button onClick={onSave} className="btn btn-primary my-1">
              Save Preferences
            </button>
          </Fragment>
        )}
      </div>

      {/* Zipcode Modal */}
      <div className="modal" id="zipModal">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Zipcode</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type="number"
                  placeholder="New Zipcode"
                  name="newZip"
                  value={newZip}
                  onChange={onChange}
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-warning mx-3" data-dismiss="modal">
                Cancel
              </button>
              <button
                onClick={onZip}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Change Zipcode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Radius Modal */}
      <div className="modal" id="radModal">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Search Radius</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type="number"
                  placeholder="New Radius in Miles"
                  name="newRad"
                  value={newRad}
                  onChange={onChange}
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-warning mx-3" data-dismiss="modal">
                Cancel
              </button>
              <button
                onClick={onRad}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Change Radius
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Favorite Team Modal */}
      <div className="modal" id="favTeamModal">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center">Favorite Team</h5>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Favorite Team"
                  name="newFavTeam"
                  value={newFavTeam}
                  onChange={onChange}
                  className="form-control"
                ></input>
              </div>
              <button className="btn btn-warning mx-3" data-dismiss="modal">
                Cancel
              </button>
              <button
                onClick={onFavTeam}
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Change Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { updateUserPreferences, loadUser })(
  Profile
);
