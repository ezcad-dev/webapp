import { Canvas } from "react-three-fiber";
import CameraControls from "./CameraControls";
import SurveysPlot from "../surveys/SurveysPlot";
import { ReactReduxContext, Provider } from "react-redux";

/*
https://github.com/pmndrs/react-three-fiber/issues/281

*/

const XzCanvas = () => {
  /*
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight />
      <CameraControls target={[-1.2, 0, 0]} />
      <SurveysPlot />
    </Canvas>
  );

Uncaught Error: Could not find "store" in the context of "Connect(SurveysPlot)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(SurveysPlot) in connect options.

https://github.com/pmndrs/react-three-fiber/issues/43#issuecomment-476073615

https://stackoverflow.com/a/36214384

  */

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ambientLight />
          <CameraControls target={[-1.2, 0, 0]} />
          <Provider store={store}>
            <SurveysPlot />
          </Provider>
        </Canvas>
      )}
    </ReactReduxContext.Consumer>
  );
};

// const mapStateToProps = (state) => state;
// export default connect(mapStateToProps)(XzCanvas);
export default XzCanvas;
