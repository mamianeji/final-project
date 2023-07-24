import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const reservationadd = createAsyncThunk(
  "reservation/add",
  async (reservation) => {
    try {
      let result = axios.post(
        "http://localhost:5000/reservation/add",
        reservation
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const reservationget = createAsyncThunk("reservation/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/reservation/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const reservationdelete = createAsyncThunk(
  "reservation/delete",
  async (id) => {
    try {
      let result = axios.delete(`http://localhost:5000/reservation/${id}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const reservationupdate = createAsyncThunk(
  "reservation/update",
  async ({ id, edit }) => {
    try {
      let response = await axios.put(
        `http://localhost:5000/reservation/${id}`,
        edit
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  reservation: null,
  status: null,
};
export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: {
    [reservationadd.pending]: (state) => {
      state.status = "pending";
    },
    [reservationadd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [reservationadd.rejected]: (state) => {
      state.status = "fail";
    },

    [reservationget.pending]: (state) => {
      state.status = "pending";
    },
    [reservationget.fulfilled]: (state, action) => {
      state.status = "success";
      state.reservation = action.payload.data.reservation;
    },
    [reservationget.rejected]: (state) => {
      state.status = "fail";
    },
    [reservationdelete.pending]: (state) => {
      state.status = "pending";
    },
    [reservationdelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [reservationdelete.rejected]: (state) => {
      state.status = "fail";
    },
    [reservationupdate.pending]: (state) => {
      state.status = "pending";
    },
    [reservationupdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [reservationupdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default reservationSlice.reducer;
