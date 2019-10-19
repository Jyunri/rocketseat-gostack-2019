const express = require('express');
const server = express();

server.use(express.json());

// application storage

projects = [
  {
    "id": "1",
    "title": "Projeto teste",
    "tasks": [],
  }
];

requestCount = 0;


// middlewares
server.use((req, res, next) => {
  console.log(requestCount += 1);
  return next();
});

function checkIfProjectExists(req, res, next) {
  const id = req.params.id;
  projectIndex = projects.findIndex((project) => project.id == id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: 'Project is not registered' }) 
  }

  req.projectIndex = projectIndex;
  return next();
};

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });
  return res.json(projects);
});

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { title } = req.body;

  projects[req.projectIndex].title = title;
  return res.json(projects);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  projects.splice(req.projectIndex, 1);
  return res.json(projects);
});

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  projects[req.projectIndex].tasks.push({ title });

  return res.json(projects);
});


server.listen(3000);