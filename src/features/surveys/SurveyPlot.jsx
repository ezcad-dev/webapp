import React from "react";
import { connect } from "react-redux";
import Box from "../../components/Box";

const SurveyPlot = (props) => {
  const { survey, checked } = props;
  // const survey = surveys[surveyId];
  const visible = checked.includes(survey.uuid) ? true : false;
  return visible && <Box position={[-1, 0, 0]} />;
};

const mapStateToProps = (state, ownProps) => ({
  survey: state.surveys.entities[ownProps.id],
  checked: state.tree.checked,
});

export default connect(mapStateToProps)(SurveyPlot);
