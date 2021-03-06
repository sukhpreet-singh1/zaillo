import React, { Component } from "react";
import { NavLink ,Link} from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
      <div className="appAside" />
       <div className="appForm">
        <div className="pageSwitcher">
        <NavLink
                 to="/sign-in"
                 activeClassName="active"
                 className="pageSwitcherItem"
               >
                Sign In
               </NavLink>
               <NavLink
                 exact
                 to="/sign-up"
                 activeClassName="pageSwitcherItem-active"
                 className="pageSwitcherItem"
               >
                Sign Up
              </NavLink>
        </div>      
      <div className="formCenter">
        <form className="formFields" onSubmit={this.handleSubmit}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            or
            <Link to="/sign-up" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} >
                <span></span>
              </FacebookLoginButton>
            
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} >
                <span></span>
              </InstagramLoginButton>
            </div>
            <div className="googleButton">
              <GoogleLoginButton onClick={() => alert("Hello")} >
                <span></span>
              </GoogleLoginButton>
            </div>


          </div>
        </form>
      </div>
      </div>
      </div>
      
    );
  }
}

export default SignInForm;
