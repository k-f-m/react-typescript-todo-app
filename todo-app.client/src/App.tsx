import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import { TodoItem } from './TodoItem';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<TodoItem[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        axios.get('/Todo')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1 className="title">todos</h1>
            <TaskInput setTasks={setTasks} setErrorMessage={setErrorMessage} />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default App;