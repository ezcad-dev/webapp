import { Canvas } from "react-three-fiber";
import CameraControls from "./CameraControls";
import { useSelector, useDispatch } from "react-redux";

import { selectSurveyById, selectSurveyIds } from "../surveys/surveysSlice";

import { selectChecked } from "../tree/treeSlice";
import Box from "../../components/Box";

/*
https://github.com/pmndrs/react-three-fiber/issues/281
*/

const SurveyPlot = ({ surveyId, checked }) => {
  //   const survey = useSelector((state) => selectSurveyById(state, surveyId));
  //   const checked = useSelector(selectChecked);
  const visible = checked.includes(surveyId) ? true : false;
  console.log("t3", visible);
  return visible && <Box position={[-1, 0, 0]} />;
};

const XzCanvas = () => {
  const surveyIds = useSelector(selectSurveyIds);
  const status = useSelector((state) => state.surveys.status);

  const checked = useSelector(selectChecked);

  const orderedSurveyIds = surveyIds.slice().reverse();

  let content;
  content = orderedSurveyIds.map((surveyId) => (
    <SurveyPlot key={surveyId} surveyId={surveyId} checked={checked} />
  ));

  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight />
      <CameraControls target={[-1.2, 0, 0]} />
      {content}
    </Canvas>
  );
};

export default XzCanvas;
