import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Link ,Routes} from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";



ReactDOM.render(
     <Router>
        <Routes>
            <Route exact path="/" element={<App/>}  />
            <Route path="/sign-up" element={<SignUpForm/>} />
            <Route path="/sign-in" element={<SignInForm/>} />
          </Routes>
      </Router>
, document.getElementById("root"));
