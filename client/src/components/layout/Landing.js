import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

class Landing extends Component {
  render() {
    return (
        <>
            <div className="container">
                <div className="text-center hide" id="banner" style={{borderRadius: "10px", marginTop: "4%"}}>
                    <div className="card-header" style={{backgroundColor: "rgb(169, 213, 253)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}>
                        <b>Monthly Calendar</b>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Register for full access to Budget Calendar</h5>
                        <p className="card-text">Once registered, you'll be able to save and view your calendars, receive email and text updates on any upcoming dates and have access to all your data on any device.</p>
                        <Link to="/register" className="btn btn-dark">
                          Register
                        </Link>
                        <Link to="/login" className="btn btn-dark" style={{marginLeft: "1%"}}>
                          Login
                        </Link>
                        <Link to="/guest" className="btn btn-dark" style={{marginLeft: "1%"}}>
                          Continue as Guest
                        </Link>
                    </div>
                    <div className="card-footer text-muted" style={{backgroundColor: "rgb(169, 213, 253)", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px"}}>
                        <img src={logo} width="30" height="30" alt="React App Logo"/>
                    </div>
                </div>
            </div>
        </>
    );
  }
}
export default Landing;