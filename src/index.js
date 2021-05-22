const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

{/**
  id: 'uuid', // precisa ser um uuid
  name: 'Danilo Vieira',
  username: 'danilo', 
  todos: []
*/}

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
  const { id } = request.headers;

  const user = users.find( user => user. id === id);

  if(!user) {
    return response.status(400).json({ error: "usuário não exist"})
  }

  request.user = user; 

  return next();
}

app.post('/users', (request, response) => {
  // Complete aqui
  const { name, userName } = request.body;

  users.push({
    id: uuidv4,
    name,
    userName,
    todos: [],
  });
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;