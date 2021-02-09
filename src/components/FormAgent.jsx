import CubeNewFromIndex from "./cube/new/FromIndex";
import CubeNewFromExisting from "./cube/new/FromExisting";

function FormAgent(props) {
  const formName = props.formName;
  switch (formName) {
    case "Cube new from index":
      return <CubeNewFromIndex />;
    case "Cube new from existing":
      return <CubeNewFromExisting />;
    default:
      return null;
  }
}

export default FormAgent;
