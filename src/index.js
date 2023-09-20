import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ContextProvider from "./components/Context";
import EmailConfirm from "./pages/EmailConfirm";
import ForgotPass from "./pages/ForgotPass";
import ChangePass from "./pages/ChangePass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<LoginLayout />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* </Route> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/emailconfirm/:token" element={<EmailConfirm />} />
        <Route path="/changepass/:token" element={<ChangePass />} />

        {/* <Route element={<UserLayout />}> */}
        {/* <Route path='/dashboard' element={<Posts />}/>
         */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
