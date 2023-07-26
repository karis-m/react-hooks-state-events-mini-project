import React from "react";
import Task from "./Task"

function TaskList(props) {
  return (
    <div className="tasks">
      <Task text={props.text} category={props.category}/>
    </div>
  );
}

export default TaskList;
