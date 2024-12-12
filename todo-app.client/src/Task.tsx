import React from 'react';
import axios from 'axios';
import { TodoItem } from './TodoItem';
import './Task.css';

interface TaskProps {
    task: TodoItem;
    setTasks: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Task: React.FC<TaskProps> = ({ task, setTasks }) => {
    const deleteTask = (id: number) => {
        axios.delete(`/Todo/${id}`).then(() => {
            setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
        });
    };

    const markAsDone = (id: number) => {
        const updatedTask = { ...task, isDone: !task.isDone };
        axios.put(`/Todo/${id}`, updatedTask).then(() => {
            setTasks(prevTasks => prevTasks.map(t => t.id === id ? updatedTask : t));
        });
    };

    const isOverdue = task.deadline && new Date(task.deadline) < new Date();

    return (
        <tr className={`${task.isDone ? 'task-done' : 'task-pending'} ${isOverdue ? 'task-overdue' : ''}`}>
            <td>{task.description}</td>
            <td>{task.deadline ? new Date(task.deadline).toLocaleDateString() : 'No deadline'}</td>
            <td>
                <button onClick={() => markAsDone(task.id)} className="action-button">{task.isDone ? 'Undone' : 'Done'}</button>
                <button onClick={() => deleteTask(task.id)} className="action-button">Delete</button>
            </td>
        </tr>
    );
};

export default Task;