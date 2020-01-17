import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser, clearErrors } from "../../actions/userActions";
import { setAlert } from "../../actions/alertActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

///////Edited this page for debugging. Need to take out the user hardcoding and set it back in the onSubmit

const Login = ({
  user: { isAuthenticated, loading, error },
  loginUser,
  clearErrors,
  setAlert,
  history
}) => {
  useEffect(() => {
    clearState();
    if (isAuthenticated & !loading) {
      history.push("/");
    }
    if (error !== null) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, loading, history]);

  const [userIN, setUserIN] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userIN;

  //Get all inputs
  const onChange = e => {
    setUserIN({ ...userIN, [e.target.name]: e.target.value });
  };

  //Clear state
  const clearState = () => {
    console.log("It is in clear state");
    setUserIN({
      email: "",
      password: ""
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Uncomment for testing to speed it up
    // const userItem = {
    //   email: "test@gmail.com",
    //   password: "111111"
    // };

    // Comment out for testing
    const userItem = {
      email,
      password
    };
    loginUser(userItem);
    clearState();
  };

  return (
    <section className="form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card bg-white p-4 mb-4">
              <div className="card-body">
                <h1>
                  <i className="fas fa-sign-in-alt"></i> Login
                </h1>
                <p>Log in to create broadcasts, game updates and messages</p>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter email"
                      required
                      onChange={onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter password"
                      required
                      onChange={onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-block"
                  />
                </form>
                <p className="my-4">
                  {" "}
                  Forgot Password? <Link to={"/"}>Reset Password</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  loginUser,
  clearErrors,
  setAlert
})(Login);
