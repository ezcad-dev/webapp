import React, { useRef } from "react";
import { useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/*
https://codeworkshop.dev/blog/2020-04-03-adding-orbit-controls-to-react-three-fiber/
*/

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const CameraControls = (props) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      {...props}
      /*
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      */
    />
  );
};

export default CameraControls;
