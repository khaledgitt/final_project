import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./gameSlice/filmSlice";
import gameSlice from "./gameSlice/gameSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    film: filmSlice,
  },
});
