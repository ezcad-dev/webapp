import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

import { selectSurveyIds, selectAllSurveys } from "../surveys/surveysSlice";
import { checkChanged, selectChecked } from "./treeSlice";

/*
https://jakezatecky.github.io/react-checkbox-tree/
https://github.com/jakezatecky/react-checkbox-tree

const nodes = [
  {
    value: "/app",
    label: "app",
    children: [
      {
        value: "/app/Http",
        label: "Http",
      },
    ],
  },
  {
    value: "/README.md",
    label: "README.md",
  },
];

class ObjectTree extends React.Component {
  state = {
    checked: [],
    expanded: [],
  };

  constructor(props) {
    super(props);

    this.onCheck = this.onCheck.bind(this);
    this.onExpand = this.onExpand.bind(this);
  }

  onCheck(checked) {
    this.setState({ checked });
  }

  onExpand(expanded) {
    this.setState({ expanded });
  }

  render() {
    const { checked, expanded } = this.state;

    return (
      <CheckboxTree
        checked={checked}
        expanded={expanded}
        iconsClass="fa5"
        nodes={nodes}
        showNodeIcon={false}
        onCheck={this.onCheck}
        onExpand={this.onExpand}
      />
    );
  }
}

*/

const Tree = () => {
  const checked = useSelector(selectChecked);
  const dispatch = useDispatch();

  const onCheck = (checked, targetNode) => {
    dispatch(checkChanged(checked));
  };

  const surveys = useSelector(selectAllSurveys);
  // const surveys = [
  // { uuid: "1", name: "t1" },
  // { uuid: "2", name: "t2" },
  // ];
  const nodes = surveys.map((survey) => ({
    value: survey.uuid,
    label: survey.name,
  }));

  return (
    <CheckboxTree
      checked={checked}
      iconsClass="fa5"
      nodes={nodes}
      showNodeIcon={true}
      onCheck={onCheck}
    />
  );
};

export default Tree;
