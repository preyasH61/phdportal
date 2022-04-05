import React from "react";
import { Route, Routes } from "react-router-dom";

import ActivationEmail from "./auth/ActivationEmail";
import Application from "./application/Application";
import ContactUs from "./contactUs/ContactUs";
import ForgotPassword from "./auth/ForgotPassword";
import HowToApply from "./howToApply/HowToApply";
import ImpDates from "./impDates/ImpDates";
import Login from "./auth/Login";
import PaymentGuideline from "./paymentGuidelines/PaymentGuideline";
import ResetPassword from "./auth/ResetPassword";
import Signup from "./auth/Signup";

import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged } = auth;
  return (
    <section>
      <Routes>
        <Route
          path="/user/activate/:activation_token"
          element={<ActivationEmail />}
          exact
        />
        <Route
          path="/application"
          element={isLogged ? <Application /> : <Login />}
          exact
        />
        <Route path="/contactus" element={<ContactUs />} exact />
        <Route path="/forgotpassword" element={<ForgotPassword />} exact />
        <Route path="/howtoapply" element={<HowToApply />} exact />
        <Route path="/impdates" element={<ImpDates />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/paymentguidelines" element={<PaymentGuideline />} exact />
        <Route
          path="/user/resetpassword/:token"
          element={<ResetPassword />}
          exact
        />
        <Route path="/signup" element={<Signup />} exact />
      </Routes>
    </section>
  );
}

export default Body;
