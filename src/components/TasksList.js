import React from 'react';
import Task from './Task';

const TaskList = props => {
	return (
		<div className="task"
		     style={{
		     	'minHeight': '70px',
			     'border': 'solid 1px',
			     'margin': '2px',
			     'background': 'gainsboro',
			     'padding': '5px'
		     }}>
			<div className="task-list-title">
				<strong>{props.status}</strong>
			</div>
			{props.tasks.map(task => (
				<Task key={task.id} task={task} />
			))}
		</div>
	);
}

export default TaskList;