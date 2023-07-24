import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reservationadd, reservationget } from "../redux/reservationSlice";

import Swal from "sweetalert2";

function ProductDesc({ el, ping, setping }) {
  const [show, setShow] = useState(false);
  const client = useSelector((state) => state.client?.client);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const [reservation, setreservation] = useState({
    name: client?.name,
    product: el.name,
    number: 1,
    date: "",
    prix: el.prix,
  });

  // console.log(commande)
  // const dispatch=useDispatch();
  return (
    <div style={{ marginTop: "50px" }}>
      <>
       { client?<div className="buttonss">
          <button
            className="addd"
            style={{ backgroundColor: "#a9a95f", marginLeft: "50px" }}
            onClick={handleShow}
          >
            Book Now
          </button>
        </div>:null}

        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          size="lg"
          style={{ marginTop: "120px" }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{el.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex" }}>
              <div>
                <img src={el.image} width="226" height="193" />
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "50px",
                  }}
                >
                  <div style={{ width: "100px" }}>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                    <h1>{el.prix}</h1>
                  </div>
                </div>
              </div>

              <Form style={{ marginLeft: "150px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" placeholder={client?.name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter your phone number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) =>
                      setreservation({ ...reservation, date: e.target.value })
                    }
                  />
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="buttonss">
              <button
                style={{ width: "150px" }}
                onClick={() => {
                  dispatch(reservationadd(reservation));
                  dispatch(reservationget());

                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your reservation is saved",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  setping(!ping);
                }}
              >
                Book now
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ProductDesc;
