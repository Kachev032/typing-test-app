import { createSlice } from "@reduxjs/toolkit";
import { getRandomText } from "@/utils/textGenerator";
import { calculateAccuracy, calculateWPM } from "@/utils/calculateMetrics";

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    currentText: getRandomText(),
    userInput: "",
    startTime: null,
    results: null,
    activeCharIndex: 0,
    lastKeyTimes: {},
    isTabPressed: false,
  },
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setActiveCharIndex: (state, action) => {
      state.activeCharIndex = action.payload;
    },
    updateLastKeyTimes: (state, action) => {
      state.lastKeyTimes = {
        ...state.lastKeyTimes,
        [action.payload.key]: action.payload.time,
      };
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    resetTest: (state) => {
      state.currentText = getRandomText();
      state.userInput = "";
      state.startTime = null;
      state.results = null;
      state.activeCharIndex = 0;
      state.lastKeyTimes = {};
    },
    setTabPressed: (state, action) => {
      state.isTabPressed = action.payload;
    },
  },
});

export const {
  setUserInput,
  setStartTime,
  setActiveCharIndex,
  updateLastKeyTimes,
  setResults,
  resetTest,
  setTabPressed,
} = typingSlice.actions;
export default typingSlice.reducer;
