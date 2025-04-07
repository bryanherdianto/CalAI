# **CalAI**

An AI-Powered Calendar Scheduler

CalAI is an intelligent calendar scheduling tool that leverages AI to help you manage your time effectively. This README provides step-by-step instructions to set up and run the project locally.

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Setup Instructions](#setup-instructions)
   - [Step 1: Create Python Environment](#step-1-create-python-environment)
   - [Step 2: Install Dependencies](#step-2-install-dependencies)
   - [Step 3: Run the Backend Server](#step-3-run-the-backend-server)
   - [Step 4: Run the Frontend Server](#step-4-run-the-frontend-server)
3. [Project Structure](#project-structure)

## **Prerequisites**

Before you begin, ensure you have the following installed on your system:
- **Python** (>= 3.8): [Download Python](https://www.python.org/downloads/)
- **Node.js** (>= 16): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

## **Setup Instructions**

### **Step 1: Create Python Environment**
To isolate dependencies, create and activate a Python virtual environment:

```bash
# Create a virtual environment
python -m venv env

# Activate the virtual environment
# On Windows:
env\Scripts\activate

# On macOS/Linux:
source env/bin/activate
```

### **Step 2: Install Dependencies**

Install the backend and frontend dependencies.

#### Backend:
Navigate to the `backend` directory and install Python dependencies:

```bash
cd ./backend
pip install -r requirements.txt
```

#### Frontend:
Navigate to the `frontend` directory and install Node.js dependencies:

```bash
cd ../frontend
npm install
```

### **Step 3: Run the Backend Server**

The backend is built using FastAPI and can be started with the following command:

```bash
cd ./backend
uvicorn main:app --reload
```

This will start the backend server on `http://127.0.0.1:8000`. The `--reload` flag ensures the server restarts automatically when you make changes to the code.

### **Step 4: Run the Frontend Server**

The frontend is built using a modern framework like React or Vue. Start the development server with the following command:

```bash
cd ../frontend
npm run dev
```

This will start the frontend server, typically on `http://localhost:3000`. Open this URL in your browser to interact with the application.

## **Project Structure**

The project is organized as follows:

```
CalAI/
├── backend/          # Backend code (FastAPI)
│   ├── main.py       # Main entry point for the FastAPI app
│   ├── requirements.txt # Python dependencies
│   └── ...           # Additional backend files
├── frontend/         # Frontend code (React/Vue/etc.)
│   ├── package.json  # Node.js dependencies and scripts
│   ├── src/          # Frontend source code
│   └── ...           # Additional frontend files
├── env/              # Python virtual environment (ignored by Git)
├── README.md         # This file
└── ...               # Other project files
```
