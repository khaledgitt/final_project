import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gameUpdt } from "../Js/gameSlice/gameSlice";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Updategame = ({ gameId, ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [updated, setupdated] = useState({});

  const handleEdit = () => {
    dispatch(gameUpdt({ id: gameId, updated }));
    setping(!ping);
    console.log(updated);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit game
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
              placeholder="enter game name"
              onChange={(e) => {
                setupdated({ ...updated, name: e.target.value });
              }}
            />
            <input
              type="text"
              placeholder="enter game image"
              onChange={(e) => {
                setupdated({ ...updated, image: e.target.value });
              }}
            />

            <input
              type="text"
              placeholder="enter game description"
              onChange={(e) => {
                setupdated({ ...updated, description: e.target.value });
              }}
            />
            <div className="game">
              <input type="text" placeholder="enter game name" />
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
              Swal.fire("Good job!", "game edited!", "success");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Updategame;
