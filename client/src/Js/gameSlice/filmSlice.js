import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const filmAdd = createAsyncThunk("film/add", async (film) => {
  try {
    let result = axios.post("http://localhost:5000/film/", film);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const filmGet = createAsyncThunk("film/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/film/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const filmDel = createAsyncThunk("film/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/film/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const filmUpdt = createAsyncThunk(
  "film/update",
  async ({ id, updated }) => {
    try {
      let result = axios.put(`http://localhost:5000/film/${id}`, updated);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  film: null,
  status: null,
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {},
  extraReducers: {
    [filmAdd.pending]: (state) => {
      state.status = "pending";
    },
    [filmAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [filmAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [filmGet.pending]: (state) => {
      state.status = "pending";
    },
    [filmGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.film = action.payload.data?.film;
    },
    [filmGet.rejected]: (state) => {
      state.status = "fail";
    },
    [filmDel.pending]: (state) => {
      state.status = "pending";
    },
    [filmDel.fulfilled]: (state) => {
      state.status = "success";
    },
    [filmDel.rejected]: (state) => {
      state.status = "fail";
    },
    [filmUpdt.pending]: (state) => {
      state.status = "pending";
    },
    [filmUpdt.fulfilled]: (state) => {
      state.status = "success";
    },
    [filmUpdt.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default filmSlice.reducer;
