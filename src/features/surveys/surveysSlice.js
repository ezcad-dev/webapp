import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";

import { client } from "../../api/client";

export const fetchSurvey = createAsyncThunk(
  "surveys/fetchSurvey",
  async (surveyName) => {
    const url = process.env.REACT_APP_API_URL + "surveys/" + surveyName;
    // const response = await fetch(url);
    const response = await client.get(url);
    return response.survey;
  }
);

const surveysAdapter = createEntityAdapter({
  selectId: (survey) => survey.uuid,
  // Keep the "all IDs" array sorted based on object names alphabetically
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const {
  selectAll: selectAllSurveys,
  selectIds: selectSurveyIds,
  selectById: selectSurveyById,
} = surveysAdapter.getSelectors((state) => state.surveys);

const initialState = surveysAdapter.getInitialState({
  status: "idle",
  error: null,
});

const surveysSlice = createSlice({
  name: "surveys",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSurvey.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSurvey.fulfilled]: (state, action) => {
      surveysAdapter.upsertOne(state, action);
      state.status = "succeeded";
    },
  },
});

export default surveysSlice.reducer;
