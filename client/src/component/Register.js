import React, { useEffect, useState } from "react";
import "./style/register.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clientLogin, clientRegister } from "../redux/userSlice/userSlice";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    image:
      "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [client, setClient] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="mm">
      <div className="main-register">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <div onSubmit={(e) => e.preventDefault()}>
            <label className="ll" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="inp"
              type="text"
              name="txt"
              placeholder="Name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
            />
            <input
              className="inp"
              type="text"
              name="txt"
              placeholder="Last Name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, lastname: e.target.value })
              }
            />
            <input
              className="inp"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <input
              className="inp"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <button
              className="bb"
              onClick={() => {
                dispatch(clientRegister(register));
                setTimeout(() => {
                  navigate("/profil");
                }, 1000);
              }}
            >
              Sign up
            </button>
          </div>
        </div>
        <div className="login">
          <div onSubmit={(e) => e.preventDefault()}>
            <label className="ll" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="inp"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setClient({ ...client, email: e.target.value })}
            />
            <input
              className="inp"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) =>
                setClient({ ...client, password: e.target.value })
              }
            />
            <button
              className="bb"
              onClick={() => {
                {
                  dispatch(clientLogin(client));
                  setTimeout(() => {
                    navigate("/profil");
                  }, 1000);
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
