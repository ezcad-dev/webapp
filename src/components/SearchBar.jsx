import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Popup from "./Popup";
import FormAgent from "./FormAgent";

/*
https://material-ui.com/components/autocomplete/#ControllableStates.js
https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/autocomplete/ControllableStates.js
*/

const options = ["Cube new from index", "Cube new from existing"];

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <Autocomplete
        {...props}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          newValue && setOpenPopup(true);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="search-bar-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Select tool" variant="outlined" />
        )}
      />

      <Popup title={value} openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <FormAgent formName={value} />
      </Popup>
    </>
  );
}
