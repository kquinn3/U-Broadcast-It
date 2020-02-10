import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileModal from "./ProfileModal";
import ProfileSelection from "./ProfileSelection";
import { updateUserPreferences, loadUser } from "../../../actions/userActions";

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
        <p className="my-2">{user.name}</p>
        {/* <p className="my-2">Change password (Not done yet)</p> */}
        <p className="my-2">Role: {user.role}</p>

        <ProfileSelection
          paramFlag={zipFlag}
          paramNew={newZip}
          paramOld={user.zipcode}
          profileType="zipcode"
        />
        <ProfileSelection
          paramFlag={radFlag}
          paramNew={newRad}
          paramOld={user.radius}
          profileType="radius"
        />
        <ProfileSelection
          paramFlag={favTeamFlag}
          paramNew={newFavTeam}
          paramOld={user.team}
          profileType="favoriteTeam"
        />

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

      <ProfileModal
        modalId="radModal"
        modalType="radius"
        newVal={newRad}
        onChange={onChange}
        btnClick={onRad}
      />
      <ProfileModal
        modalId="zipModal"
        modalType="zipcode"
        newVal={newZip}
        onChange={onChange}
        btnClick={onZip}
      />
      <ProfileModal
        modalId="favTeamModal"
        modalType="favoriteTeam"
        newVal={newFavTeam}
        onChange={onChange}
        btnClick={onFavTeam}
      />
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
