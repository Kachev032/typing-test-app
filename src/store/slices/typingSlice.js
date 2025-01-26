import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRandomText } from "@/services/textService";
import { calculateAccuracy, calculateWPM } from "@/utils/calculateMetrics";

export const fetchNewText = createAsyncThunk(
  "typing/fetchNewText",
  async () => {
    const text = await fetchRandomText();
    return text || "Failed to load text. Press Tab + Enter to try again.";
  }
);

const typingSlice = createSlice({
  name: "typing",
  initialState: {
    currentText: "Loading...",
    userInput: "",
    startTime: null,
    results: null,
    activeCharIndex: 0,
    lastKeyTimes: {},
    isTabPressed: false,
    status: "idle",
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
      state.currentText = "Loading...";
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewText.pending, (state) => {
        state.status = "loading";
        state.currentText = "Loading...";
      })
      .addCase(fetchNewText.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentText = action.payload;
      })
      .addCase(fetchNewText.rejected, (state) => {
        state.status = "failed";
        state.currentText =
          "Failed to load text. Press Tab + Enter to try again.";
      });
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
