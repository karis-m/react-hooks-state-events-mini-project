import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    const taskData = TASKS.map((task) => {
      return(task.text, 
        task.category) 
        
      
    })
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList key={taskData.text} text={taskData.text} category={taskData.category}/>
    </div>
  );
}

export default App;
