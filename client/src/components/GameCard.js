import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { gameDel } from "../Js/gameSlice/gameSlice";
import Updategame from "./Updategame";
// import Swal from "sweetalert2/dist/sweetalert2.js";

const GameCard = ({ game, ping, setping }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <figure class="card">
        <img src={game?.image} />

        <figcaption className="titl">{game?.name}</figcaption>
        <figcaption>{game?.description}</figcaption>
      </figure>

      <div className="option">
        <button
          onClick={() => {
            dispatch(gameDel(game._id));
            setping(!ping);
          }}
        >
          delete
        </button>
        <Updategame gameId={game._id} ping={ping} setping={setping} />
      </div>
    </div>
  );
};

export default GameCard;
