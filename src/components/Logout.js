import { signInWithPopup, signOut } from "firebase/auth";
import "./Logout.css";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loguot = () => {
    //ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div className="box">
      <p>ログアウトする</p>
      <button onClick={loguot}>ログアウトする</button>
    </div>
  );
};

export default Logout;
