import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import surveysReducer from "../features/surveys/surveysSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    surveys: surveysReducer,
  },
});
