# Todo-List-in-ExpressJs-ReactJs-NodeJs-MongoDB-Scss

A Todo List application built using the MERN stack (MongoDB, Express, React, Node.js) with SCSS for styling.

## Preview
<picture><img src = "todolist/public/Todo.gif" width = 100%></picture>

## Prerequisites

- Docker
- Docker Compose

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. Clone the repository:
   - Using ssh
      ```bash
      git clone git@github.com:antoniocollazo/todo_list_mern.git
      ```
   - Using https
      ```bash
      git clone https://github.com/antoniocollazo/todo_list_mern.git
      ```
2. Execute the docker compose file:
   ```
   docker compose up -d
   ```
3. Running services:
   - API Server runs on http://localhost:6001.
   - Fronted App (Todolist) runs on http://localhost:3001.


## API Endpoints
- GET /get: Fetch all todos.
- PUT /update/:id: Mark a todo as done by ID.
- DELETE /delete/:id: Delete a todo by ID.
- POST /add: Add a new todo.

## Built With
- React - A JavaScript library for building user interfaces.
- Express - Fast, unopinionated, minimalist web framework for Node.js.
- Node.js - JavaScript runtime built on Chrome's V8 JavaScript engine.
- MongoDB - The NoSQL database for modern applications.
- SCSS - A CSS preprocessor that adds power and elegance to the basic language.
