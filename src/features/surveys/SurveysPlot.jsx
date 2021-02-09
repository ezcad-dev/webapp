import React from "react";
import { connect } from "react-redux";
import SurveyPlot from "./SurveyPlot";

const SurveysPlot = (props) => {
  const orderedSurveyIds = props.surveyIds.slice().reverse();
  return orderedSurveyIds.map((surveyId) => (
    <SurveyPlot key={surveyId} id={surveyId} />
  ));

  /*
  const surveyIds = useSelector(selectSurveyIds);
  const status = useSelector((state) => state.surveys.status);
  const error = useSelector((state) => state.surveys.error);

  let content;
  if (status === "loading") {
    content = false && <div>Loading</div>;
  } else if (status === "succeeded") {
    content = orderedSurveyIds.map((surveyId) => (
      <SurveyPlot key={surveyId} surveyId={surveyId} />
    ));
  } else if (status === "error") {
    content = false && <div>{error}</div>;
  } else if (status === "idle") {
    content = false && <div>Idle</div>;
  }
  return <Box position={[1, 0, 0]} />;
  return content;
  */
};

const mapStateToProps = (state) => ({
  surveyIds: state.surveys.ids,
});

export default connect(mapStateToProps)(SurveysPlot);
