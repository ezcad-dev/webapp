import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import surveysReducer from "../features/surveys/surveysSlice";
import treeReducer from "../features/tree/treeSlice";
import canvasReducer from "../features/canvas/canvasSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    surveys: surveysReducer,
    tree: treeReducer,
    canvas: canvasReducer,
  },
});
