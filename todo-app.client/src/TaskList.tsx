import React from 'react';
import { TodoItem } from './TodoItem';
import Task from './Task';
import './TaskList.css';

interface TaskListProps {
    tasks: TodoItem[];
    setTasks: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
    return (
        <table className="task-table">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Deadline</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        setTasks={setTasks}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default TaskList;