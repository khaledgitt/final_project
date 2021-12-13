import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { gameAdd } from "../Js/gameSlice/gameSlice";

const AddGame = ({ ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [game, setGame] = useState({
    name: "",
    description: "",
    release: "",
    image: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    dispatch(gameAdd(game));
    Swal.fire("Good job!", "game added!", "success");
    setping(!ping);
  };
  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Add Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="brenga">Add game</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-form">
          <input
            type="text"
            placeholder="enter game name"
            onChange={(e) => {
              setGame({ ...game, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="enter game image"
            onChange={(e) => {
              setGame({ ...game, image: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enter game description"
            onChange={(e) => {
              setGame({ ...game, description: e.target.value });
            }}
          />
          <div className="release">
            <input
              type="text"
              placeholder="enter game release"
              onChange={(e) => setGame({ ...game, release: e.target.value })}
            />
            <button onClick={handleAdd}>add game</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="light"
            onClick={() => {
              handleClose();
              handleAdd();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddGame;
