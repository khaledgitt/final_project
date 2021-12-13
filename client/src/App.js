import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddGame from "./components/AddGame";
import GameList from "./components/GameList";
import { gameGet } from "./Js/gameSlice/gameSlice";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import FilmList from "./components/FilmList";
import { filmGet } from "./Js/gameSlice/filmSlice";

function App() {
  const dispatch = useDispatch();
  const [ping, setping] = useState(false);
  useEffect(() => {
    dispatch(gameGet());
    dispatch(filmGet());
  }, [ping]);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          exact
          path="/"
          element={<GameList ping={ping} setping={setping} />}
        />
        <Route
          path="/film"
          element={<FilmList ping={ping} setping={setping} />}
        />
      </Routes>
    </div>
  );
}

export default App;
