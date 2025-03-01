# Task Manager API (Node.js & Express)

This is a simple REST API for managing tasks using Node.js and Express.js.

## 🚀 API Features
- **GET /api/tasks** → Returns a list of tasks  
- **POST /api/tasks** → Adds a new task  
- **DELETE /api/tasks/:id** → Deletes a task by ID  

## 🛠️ Installation & Setup

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/TUSHAR-30/backend-task.git
   cd backend-task
   ```

2. **Install Dependencies:**  
   ```bash
   npm install
   ```

3. **Start the development server:**  
   ```bash
   npm start
   ```

4. **Open the app in your browser:**  
   ```bash
   http://localhost:3000
   ```

## 📌 Example API Requests (Using Postman or cURL)
- **Get all tasks**
```bash
curl -X GET http://localhost:3000/api/tasks
```

- **Add a new task:**
```bash
curl -X POST http://localhost:3000/api/tasks -H "Content-Type: application/json" -d '{"name": "New Task", "completed": false}'
```

- **Delete a task:**
```bash
curl -X DELETE http://localhost:3000/api/tasks/1
```

## 📜 License
This project is for evaluation purposes only.


