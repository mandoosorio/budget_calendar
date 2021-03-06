import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    this.props.loginUser(userData);

    console.log(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <div className="container" style={{textAlign: "center"}}>
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
              <Link to="/" className="btn-flat waves-effect">
                Back to Home
              </Link>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Login</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
    
        <div className="container" style={{paddingLeft:"20%", paddingRight: "20%"}}>
          <form noValidate onSubmit={this.onSubmit}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                <input onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email" 
                    aria-describedby="emailHelp"
                    className={classnames("form-control", {
                      invalid: errors.email || errors.emailnotfound
                    })}/>
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              <input onChange={this.onChange}
                value={this.state.password}
                error={errors.password}
                id="password"
                type="password" 
                className={classnames("form-control", {
                  invalid: errors.password || errors.passwordincorrect
                })}/>
            </div>

            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Remember Email</label>
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);