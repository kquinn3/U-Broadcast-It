import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alerts = ({ alert }) => {
  return (
    alert.alerts.length > 0 &&
    alert.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

Alerts.propTypes = {
  alert: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(Alerts);
