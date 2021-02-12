import React, { useRef, useMemo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
// import Box from "../../components/Box";
import * as THREE from "three";
import { useThree } from "react-three-fiber";
import {
  setCamPosition,
  setCamTarget,
  setCamFarClip,
  enableControls,
} from "../canvas/canvasSlice";

/*
attach is not needed any longer in v5
https://github.com/pmndrs/react-three-fiber/pull/680#issuecomment-699453613
*/

const Line = (props) => {
  const ref = useRef();
  const points = [];
  points.push(new THREE.Vector3(-1, 0, 0));
  points.push(new THREE.Vector3(0, 1, 0));
  points.push(new THREE.Vector3(1, 0, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  /*
  From Three to R3F, which level is optimal? More declarative R3F, better.
  The critical properties aren't re-instantiated on every render.
  
  const line = new THREE.LineSegments(geometry, material);
  <primitive object={line} />
  
  const geometry = new THREE.BufferGeometry()
  const material = new THREE.LineBasicMaterial()
  <line geometry={geometry} material={material} />

  <line>
    <bufferGeometry />
    <lineBasicMaterial />
  </line>

  */

  // const geometry = useMemo(() => new THREE.DodecahedronBufferGeometry(1, 1))
  // const material = useMemo(() => new THREE.MeshBasicMaterial({ color }), [color])

  return (
    <line ref={ref} geometry={geometry}>
      <lineBasicMaterial color="blue" linewidth={50} />
    </line>
  );
};

const SurveyPlot = (props) => {
  const { survey, checked } = props;
  // const survey = surveys[surveyId];
  const visible = checked.includes(survey.uuid) ? true : false;

  // One way to toggle on/off, is this better or worse than set visible in R3F?
  // https://github.com/pmndrs/react-three-fiber/issues/281
  // return visible && <Box position={[0, 0, 0]} />;
  // return visible && <Line />;

  const geometry = useMemo(() => {
    const vertices = [];
    const colors = [];
    vertices.push(survey.originX, survey.originY, 0);
    vertices.push(survey.filendX, survey.filendY, 0);
    colors.push(1, 0, 0);
    colors.push(1, 0, 0);
    vertices.push(survey.originX, survey.originY, 0);
    vertices.push(survey.fxlendX, survey.fxlendY, 0);
    colors.push(0, 1, 0);
    colors.push(0, 1, 0);
    const p4x = survey.filendX + survey.fxlendX - survey.originX;
    const p4y = survey.filendY + survey.fxlendY - survey.originY;
    vertices.push(p4x, p4y, 0);
    vertices.push(survey.filendX, survey.filendY, 0);
    colors.push(1, 0.8, 0.08);
    colors.push(1, 0.8, 0.08);
    vertices.push(p4x, p4y, 0);
    vertices.push(survey.fxlendX, survey.fxlendY, 0);
    colors.push(1, 0.8, 0.08);
    colors.push(1, 0.8, 0.08);

    const geom = new THREE.BufferGeometry();
    geom.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geom.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return geom;
  }, [survey]);

  /*
  // Three.Legacy.js:export const VertexColors = 2;
  const linewidth = 1;
  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        linewidth: linewidth,
      }),
    [linewidth]
  );

  return (
    <lineSegments visible={visible} geometry={geometry} material={material} />
  );
  */

  return (
    <lineSegments visible={visible} geometry={geometry}>
      <lineBasicMaterial linewidth={1} vertexColors={2} />
    </lineSegments>
  );
};

const mapStateToProps = (state, ownProps) => ({
  survey: state.surveys.entities[ownProps.id],
  checked: state.tree.checked,
});

export default connect(mapStateToProps)(SurveyPlot);
