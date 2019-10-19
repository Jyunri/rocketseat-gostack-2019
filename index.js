const express = require('express');
const server = express();

server.use(express.json());

projects = [];

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  projects.push({ id, title, tasks: [] });
  return res.json(projects);
});

server.put('/projects/:id', (req, res) => {
  const id = req.params.id;
  const { title } = req.body;

  project = projects.find((project) => project.id == id);
  project.title = title;
  return res.json(projects);
});

server.delete('/projects/:id', (req, res) => {
  const id = req.params.id;

  projectIndex = projects.findIndex((project) => project.id == id);
  if (projectIndex >= 0) {
    projects.splice(projectIndex, 1);
  }
  return res.json(projects);
});

server.listen(3000);