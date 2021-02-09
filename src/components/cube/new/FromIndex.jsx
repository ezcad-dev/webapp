import React from "react";
import { Grid } from "@material-ui/core";
import Controls from "../../controls/Controls";
import { useForm, Form } from "../../useForm";

const propertyMethods = [
  { id: "zeros", title: "zeros" },
  { id: "random", title: "random" },
  { id: "index sum", title: "index sum" },
];

const initialValues = {
  cubeName: "",
  propertyName: "",
  propertyMethod: "zeros",
  ilineFirst: 0,
  ilineLast: 1,
  ilineStep: 1,
  xlineFirst: 0,
  xlineLast: 1,
  xlineStep: 1,
  depthFirst: 0,
  depthLast: 1,
  depthStep: 1,
};

export default function FromIndex(props) {
  const validate = (fieldValues = values) => {};

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialValues, true, validate);

  const handleSubmit = (e) => {
    console.log("handleSubmit", values);
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="cubeName"
            label="Cube Name"
            value={values.cubeName}
            onChange={handleInputChange}
            error={errors.cubeName}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            name="propertyName"
            label="Property Name"
            value={values.propertyName}
            onChange={handleInputChange}
            error={errors.propertyName}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.RadioGroup
            name="propertyMethod"
            label="Property Method"
            value={values.propertyMethod}
            onChange={handleInputChange}
            items={propertyMethods}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="ilineFirst"
            label="Iline First"
            type="number"
            value={values.ilineFirst}
            onChange={handleInputChange}
            error={errors.ilineFirst}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="ilineLast"
            label="Iline Last"
            type="number"
            value={values.ilineLast}
            onChange={handleInputChange}
            error={errors.ilineLast}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="ilineStep"
            label="Iline Step"
            type="number"
            value={values.ilineStep}
            onChange={handleInputChange}
            error={errors.ilineStep}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="xlineFirst"
            label="Xline First"
            type="number"
            value={values.xlineFirst}
            onChange={handleInputChange}
            error={errors.xlineFirst}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="xlineLast"
            label="Xline Last"
            type="number"
            value={values.xlineLast}
            onChange={handleInputChange}
            error={errors.xlineLast}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="xlineStep"
            label="Xline Step"
            type="number"
            value={values.xlineStep}
            onChange={handleInputChange}
            error={errors.xlineStep}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="depthFirst"
            label="Depth First"
            type="number"
            value={values.depthFirst}
            onChange={handleInputChange}
            error={errors.depthFirst}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="depthLast"
            label="Depth Last"
            type="number"
            value={values.depthLast}
            onChange={handleInputChange}
            error={errors.depthLast}
          />
        </Grid>
        <Grid item xs={4}>
          <Controls.Input
            name="depthStep"
            label="Depth Step"
            type="number"
            value={values.depthStep}
            onChange={handleInputChange}
            error={errors.depthStep}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.Button type="submit" text="Submit" />
        </Grid>
      </Grid>
    </Form>
  );
}
