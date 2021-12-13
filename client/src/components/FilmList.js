import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddFilm from "./AddFilm";
import FilmCard from "./FilmCard";

const FilmList = ({ ping, setping }) => {
  const films = useSelector((state) => state.film.film);
  const [text, settext] = useState("");

  return (
    <div>
      <header>
        <AddFilm ping={ping} setping={setping} />
      </header>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div className="film">
        <div class="wrapper">
          <h2>
            <strong>
              All films<span>( {films?.length} )</span>
            </strong>
          </h2>

          <div class="cards">
            {films ? (
              films
                .filter((el) =>
                  el.name.toLowerCase().includes(text.toLowerCase())
                )
                .map((el) => (
                  <FilmCard ping={ping} setping={setping} film={el} />
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

export default FilmList;
