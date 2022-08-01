import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignIn from "../components/account/SignIn";
import ForgotPassword from "../components/account/ForgotPassword";
import SignUp from "../components/account/SignUp";

const Account = () => {
  return (
    <div className="layout-account my-5">
      <div className="container">
        <div className="wrapbox-content-account pb-4">
          <div className="customers-account-form userbox m-auto">
            <Routes>
              <Route path="signup" element={<SignUp />}></Route>
              <Route path="signin" element={<SignIn />}></Route>
              <Route path="forgot" element={<ForgotPassword />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
