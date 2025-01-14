import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import typingReducer from "./slices/typingSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    typing: typingReducer,
  },
});
