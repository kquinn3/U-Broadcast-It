import React, { useEffect, useState } from "react";
import { registerUser, clearErrors } from "../../actions/userActions";
import { setAlert } from "../../actions/alertActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Register user, need to merge the change functions, to one and pass in the type or don't use state for the inputs
const Register = ({
  user: { isAuthenticated, loading, error },
  registerUser,
  clearErrors,
  setAlert,
  history
}) => {
  useEffect(() => {
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
    name: "",
    email: "",
    password: "",
    password2: "",
    role: "user"
  });

  const { name, email, password, password2, role } = userIN;

  //Get all inputs
  const onChange = e => {
    setUserIN({ ...userIN, [e.target.name]: e.target.value });
  };

  const clearState = () => {
    setUserIN({
      name: "",
      email: "",
      password: "",
      password2: "",
      role: "user"
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      const userItem = {
        name,
        email,
        password,
        role
      };
      registerUser(userItem);
      clearState();
    }
  };

  return (
    <section className="form mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card bg-white p-4 mb-4">
              <div className="card-body">
                <h1>
                  <i className="fas fa-user-plus"></i> Register
                </h1>
                <p>Register to create game broadcasts and/or post messages</p>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Enter Your Name"
                      required
                      onChange={onChange}
                    />
                  </div>
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
                    <label htmlFor="password">Enter password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={password}
                      placeholder="Enter password"
                      required
                      onChange={onChange}
                      minLength="6"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="name">Confirm password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="password2"
                      value={password2}
                      placeholder="Confirm password"
                      required
                      onChange={onChange}
                      minLength="6"
                    />
                  </div>
                  <div className="card card-body mb-3">
                    <h5>User Role</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="user"
                        defaultChecked
                        onChange={onChange}
                      />
                      <label className="form-check-label">
                        Regular User (Browse games, and send messages)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="broadcaster"
                        onChange={onChange}
                      />
                      <label className="form-check-label">
                        Game Broadcaster (Create games, updates and send
                        messages)
                      </label>
                    </div>
                  </div>
                  <p>
                    * Without an account, you can still view game updates and
                    messages.
                  </p>

                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary btn-block"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, {
  registerUser,
  setAlert,
  clearErrors
})(Register);
