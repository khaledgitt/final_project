import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filmDel } from "../Js/gameSlice/filmSlice";
import Updatefilm from "./Updatefilm";
// import Swal from "sweetalert2/dist/sweetalert2.js";

const FilmCard = ({ film, ping, setping }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <figure class="card">
        <img src={film?.image} />

        <figcaption className="titl">{film?.name}</figcaption>
        <figcaption>{film?.description}</figcaption>
      </figure>

      <div className="option">
        <button
          onClick={() => {
            dispatch(filmDel(film._id));
            setping(!ping);
          }}
        >
          delete
        </button>
        <Updatefilm filmId={film._id} ping={ping} setping={setping} />
      </div>
    </div>
  );
};

export default FilmCard;
