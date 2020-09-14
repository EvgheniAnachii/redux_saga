import React from "react";
import TasksList from "./TasksList";
import PropTypes from 'prop-types';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

const TasksPage = (props) => {
	return <>
		<div className="tasks">
			<div className="task-lists" style={{'display': 'flex'}}>{
				TASK_STATUSES.map(status =>
					<TasksList
						key={status}
						status={status}
						tasks={props.tasks.filter(task => task.status === status)}
					/>)
			}</div>
		</div>
	</>
}

export default TasksPage

TasksPage.propTypes = {
	tasks: PropTypes.array
}