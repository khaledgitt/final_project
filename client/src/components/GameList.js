import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddGame from "./AddGame";
import GameCard from "./GameCard";

const GameList = ({ ping, setping }) => {
  const games = useSelector((state) => state.game.game);

  const [text, settext] = useState("");
  return (
    <div>
      <header>
        <AddGame ping={ping} setping={setping} />
      </header>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => settext(e.target.value)}
        />
      </div>

      <div className="game">
        <div class="wrapper">
          <h2>
            <strong>
              All Games<span>( {games?.length} )</span>
            </strong>
          </h2>

          <div class="cards">
            {games ? (
              games
                .filter((el) =>
                  el.name.toLowerCase().includes(text.toLowerCase())
                )
                .map((el) => (
                  <GameCard ping={ping} setping={setping} game={el} />
                ))
            ) : (
              <img
                src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large?v=v2&px=999"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameList;
