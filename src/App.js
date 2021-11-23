import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link ,Routes} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="homeContainer">
        <h1 className="heading">Welcome to zaillo</h1>
        <h5 className="paragraph">As an individual, we believe your account of your experience and how you overcame mental issues can be of help to some other person going through the same.
            Consider this a safe space where nobody judges you. Your accounts remain completely anonymous.Select one of the categories for your post and let it off your mind.
            Research shows writing about something liberates our minds from the weight of it. It gives us mental peace.</h5>
        <div className="pageLink"><Link to="/sign-in" className="pagelink">Join us</Link></div>
       </div>   
    );
  }
}

export default App;
