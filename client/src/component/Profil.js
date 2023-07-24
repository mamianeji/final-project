import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { reservationdelete, reservationget } from "../redux/reservationSlice";
import { clientCurrent, clientupdate } from "../redux/userSlice/userSlice";
import "./style/profil.css";


function Profil() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.client.client);
  const reservation = useSelector((state) => state.reservation.reservation);

  console.log(reservation);
  const [newuser, setnewuser] = useState({});
  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={user?.image}
            />

            <span className="font-weight-bold">{user?.name} {user?.lastname}</span>
            <span className="text-black-50">{user?.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  defaultValue={user?.name}
                  onChange={(e) => {
                    setnewuser({ ...newuser, name: e.target.value });
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={user?.lastname}
                  placeholder="surname"
                  onChange={(e) => {
                    setnewuser({ ...newuser, lastname: e.target.value });
                  }}
                />
              </div>

              {/*            
           <div className="col-md-12">
            <label className="labels">Postcode</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter address line 2"
              defaultValue=""
            />
          </div> 
           */}
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email id"
                  defaultValue={user?.email}
                  onChange={(e) => {
                    setnewuser({ ...newuser, email: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                style={{
                  backgroundColor: "#573b8a",
                  border: "none",
                  color: "white",
                }}
                className="btn btn-primary profile-button"
                type="button"
                onClick={() => {
                  dispatch(clientupdate({ id: user._id, newuser }));
                  dispatch(clientCurrent());
                  setTimeout(() => {
                    navigate("/profil");
                  }, 1000);
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Réservation</span>
            </div>
            <br />
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Rervation Date</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {reservation
                    ?.filter((el) => el.name == user.name)
                    .map((el) => (
                      <tr>
                        <td></td>
                        <td>{el.product}</td>
                        <td>{el.date}</td>
                        <td>{el.prix}</td>
                        <td>
                          <button
                            style={{ width: "30px" }}
                            onClick={() => {
                              dispatch(reservationdelete(el._id));
                              dispatch(reservationget());
                              dispatch(clientCurrent());
                              setTimeout(() => {
                                navigate("/profil");
                              }, 1000);
                            }}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
