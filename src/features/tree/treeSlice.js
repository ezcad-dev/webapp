import { createSlice } from "@reduxjs/toolkit";

export const treeSlice = createSlice({
  name: "tree",
  initialState: {
    checked: [],
    expanded: [],
  },
  reducers: {
    checkChanged: (state, action) => {
      state.checked = action.payload;
    },
    expandChanged: (state, action) => {
      state.expanded = action.payload;
    },
  },
});

export const { checkChanged, expandChanged } = treeSlice.actions;

export const selectChecked = (state) => state.tree.checked;

export default treeSlice.reducer;
