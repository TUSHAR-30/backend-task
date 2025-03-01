const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// In-memory task storage
let tasks = [];
let idCounter = 1;

// GET /api/tasks - Retrieve all tasks
app.get('/api/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// POST /api/tasks - Add a new task
app.post('/api/tasks', (req, res) => {
    const { name, completed } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Task name is required' });
    }
    else if (typeof name != "string") {
        return res.status(400).json({ error: 'Task name should be in string format' });
    }
    if ('completed' in req.body && typeof completed !== "boolean") {
        return res.status(400).json({ error: 'Completed field should be in boolean format' });
    }

    const newTask = { id: idCounter++, name, completed: completed || false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// DELETE /api/tasks/:id - Delete a task by ID
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
