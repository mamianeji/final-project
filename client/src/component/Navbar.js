import React from "react";

import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice/userSlice";

function Navbar() {
  const user = useSelector((state) => state.client.client);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log(user);
  return (
    <nav>
      <div className="nav">
        <Link to="/" style={{ textDecoration: "none" }}>
          {" "}
          <div className="div1">Home</div>
        </Link>
        <Link to="/categories" style={{ textDecoration: "none" }}>
          <div className="div1">Services</div>
        </Link>
        <Link to="/gallery" style={{ textDecoration: "none" }}>
          <div className="div1">Gallery</div>
        </Link>

        <Link to="/about" style={{ textDecoration: "none" }}>
          <div className="div1">About</div>
        </Link>

        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="div1">Login</div>
        </Link>
        {user?.name == "admin" ? (
          <Link to="/dashbord" style={{ textDecoration: "none" }}>
            <div className="div1">Dashbord</div>
          </Link>
        ) : null}
        {user ? (
          <>
            <Link to="/profil" style={{ textDecoration: "none" }}>
              <img
                style={{
                  backgroundSize: "32px 32px",
                  borderRadius: "50%",
                  height: "43px",
                  width: "51px",
                }}
                src="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png"
                alt=""
                aria-hidden="true"
                data-noaft=""
              />{" "}
            </Link>
            <button
              style={{
                backgroundColor: "#ffffff",
                color: "black",
                width: "20px",
                height: "20px",
                marginTop: "11px",
              }}
              onClick={() => {
                dispatch(logout());
                navigate("/");
              }}
            >
              {" "}
              <img
                src="https://gogeticon.net/files/1378133/bf4d77da2506e3b7f4554b04c75df0ab.png"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
