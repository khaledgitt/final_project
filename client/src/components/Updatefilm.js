import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filmUpdt } from "../Js/gameSlice/filmSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Updatefilm = ({ filmId, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updated, setupdated] = useState({});

  const handleEdit = () => {
    dispatch(filmUpdt({ id: filmId, updated }));
    setping(!ping);
    console.log(updated);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Modal.Body className="add-form">
            <input
              type="text"
              placeholder="enter film name"
              onChange={(e) => {
                setupdated({ ...updated, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="enter film image"
              onChange={(e) => {
                setupdated({ ...updated, image: e.target.value });
              }}
            />

            <input
              type="text"
              placeholder="enter film description"
              onChange={(e) => {
                setupdated({ ...updated, description: e.target.value });
              }}
            />
            <div className="film">
              <input type="text" placeholder="enter film name" />
            </div>
          </Modal.Body>
          !
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEdit();
              handleClose();
              Swal.fire("Good job!", "film edited!", "success");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Updatefilm;
