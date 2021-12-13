import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const gameAdd = createAsyncThunk("game/add", async (game) => {
  try {
    let result = axios.post("http://localhost:5000/game/", game);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const gameGet = createAsyncThunk("game/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/game/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const gameDel = createAsyncThunk("game/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/game/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const gameUpdt = createAsyncThunk(
  "game/update",
  async ({ id, updated }) => {
    try {
      let result = axios.put(`http://localhost:5000/game/${id}`, updated);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  game: null,
  status: null,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: {
    [gameAdd.pending]: (state) => {
      state.status = "pending";
    },
    [gameAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [gameAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [gameGet.pending]: (state) => {
      state.status = "pending";
    },
    [gameGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.game = action.payload.data?.game;
    },
    [gameGet.rejected]: (state) => {
      state.status = "fail";
    },
    [gameDel.pending]: (state) => {
      state.status = "pending";
    },
    [gameDel.fulfilled]: (state) => {
      state.status = "success";
    },
    [gameDel.rejected]: (state) => {
      state.status = "fail";
    },
    [gameUpdt.pending]: (state) => {
      state.status = "pending";
    },
    [gameUpdt.fulfilled]: (state) => {
      state.status = "success";
    },
    [gameUpdt.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default gameSlice.reducer;
