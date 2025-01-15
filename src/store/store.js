import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import typingReducer from "./slices/typingSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    typing: typingReducer,
    modal: modalReducer,
  },
});
