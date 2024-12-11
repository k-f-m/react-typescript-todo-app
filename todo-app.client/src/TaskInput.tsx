import React, { useState } from 'react';
import axios from 'axios';
import { TodoItem } from './TodoItem';
import './TaskInput.css';

interface TaskInputProps {
    setTasks: React.Dispatch<React.SetStateAction<TodoItem[]>>;
    setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const TaskInput: React.FC<TaskInputProps> = ({ setTasks, setErrorMessage }) => {
    const [newTask, setNewTask] = useState<string>('');
    const [deadline, setDeadline] = useState<string>('');

    const addTask = () => {
        if (newTask.length <= 10) {
            setErrorMessage('Task description must be longer than 10 characters.');
            return;
        }

        axios.post('/Todo', { description: newTask, deadline: deadline || undefined, isDone: false })
            .then(response => {
                setTasks(prevTasks => [...prevTasks, response.data]);
                setNewTask('');
                setDeadline('');
                setErrorMessage('');
            })
            .catch(error => {
                console.error('Error adding task:', error);
                setErrorMessage('Failed to add task.');
            });
    };

    return (
        <div className="input-group">
            <input
                type="text"
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                placeholder="New task description"
                className="task-input"
            />
            <input
                type="date"
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
                className="deadline-input"
            />
            <button onClick={addTask} className="task-button">Add Task</button>
        </div>
    );
};

export default TaskInput;