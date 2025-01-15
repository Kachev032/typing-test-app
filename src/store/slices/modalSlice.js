import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isPatchNotesOpen: false,
  },
  reducers: {
    togglePatchNotes: (state) => {
      state.isPatchNotesOpen = !state.isPatchNotesOpen;
    },
  },
});

export const { togglePatchNotes } = modalSlice.actions;
export default modalSlice.reducer;
