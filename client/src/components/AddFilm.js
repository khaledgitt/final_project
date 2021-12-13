import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { filmAdd } from "../Js/gameSlice/filmSlice";

const AddFilm = ({ ping, setping }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [film, setFilm] = useState({
    name: "",
    description: "",
    release: "",
    image: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    dispatch(filmAdd(film));
    Swal.fire("Good job!", "film added!", "success");
    setping(!ping);
  };
  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Add Film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="brenga">Add film</Modal.Title>
        </Modal.Header>
        <Modal.Body className="add-form">
          <input
            type="text"
            placeholder="enter film name"
            onChange={(e) => {
              setFilm({ ...film, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="enter film image"
            onChange={(e) => {
              setFilm({ ...film, image: e.target.value });
            }}
          />

          <input
            type="text"
            placeholder="enter film description"
            onChange={(e) => {
              setFilm({ ...film, description: e.target.value });
            }}
          />
          <div className="release">
            <input
              type="text"
              placeholder="enter film release"
              onChange={(e) => setFilm({ ...film, release: e.target.value })}
            />
            <button onClick={handleAdd}>add film</button>
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

export default AddFilm;
