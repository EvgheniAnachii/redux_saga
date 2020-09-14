import React from 'react';
import logo from './logo.svg';
import './App.css';
import TasksPage from "./components/TasksPage";

const mockTasks = [
	{
		id: 1,
		title: 'Learn Redux',
		description: 'The store, actions, and reducers, oh my!',
		status: 'In Progress',
	},
	{
		id: 2,
		title: 'Peace on Earth',
		description: 'No big deal.',
		status: 'In Progress',
	},
]

function App() {
  return (
    <div className="App">
	    <div className="main-content" style={{'width': '70%', 'margin': 'auto'}}>
		    <TasksPage tasks={mockTasks} />
	    </div>
    </div>
  );
}

export default App;
