'use strict';

const morgan = require('morgan');
const express = require('express');
const { check, oneOf, validationResult } = require('express-validator'); // validation middleware
const dao = require('./dao');



/* init express */
const app = new express();
const port = 3001;

app.use(express.json());
app.use(morgan('dev'));

/* activate the server */
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


/*** API ***/

app.get('/api/detectComponents', async (req, res) => {
  try {
    console.log("sono in api");
    const result = await dao.listMyComponents();
    res.json(result);
  } catch (err) {
    console.log(err)
    res.status(500).end();
  }
});

// GET /api/allCpu
app.get('/api/allCpu', async (req, res) => {
  try {
    const result = await dao.listCPU();
    res.json(result);
  } catch (err) {
    res.status(500).end();
  }
});

// GET /api/allGpu
app.get('/api/allGpu', async (req, res) => {
  try {
    const result = await dao.listGPU();
    res.json(result);
  } catch (err) {
    res.status(500).end();
  }
});

// GET /api/allHdd
app.get('/api/allHdd', async (req, res) => {
  try {
    const result = await dao.listHdd();
    res.json(result);
  } catch (err) {
    res.status(500).end();
  }
});

// GET /api/allMb
app.get('/api/allMb', async (req, res) => {
  try {
    const result = await dao.listMb();
    res.json(result);
  } catch (err) {
    res.status(500).end();
  }
});

// GET /api/allRam
app.get('/api/allRam', async (req, res) => {
  try {
    const result = await dao.listRam();
    res.json(result);
  } catch (err) {
    res.status(500).end();
  }
});

// GET /api/allGameNames
app.get('/api/allGameNames', async (req, res) => {
  try {
    const result = await dao.listGameNames();
    res.json(result);
  } catch (err) {
    res.status(500).end();
  }
});

//GET /api/games/:name
app.get('/api/games/:name',
  [
    check('name').isLength({ min: 1, max: 50 })
  ],
  async (req, res) => {
    try {
      const result = await dao.getGame(req.params.name);
      if (result.error)
        res.status(404).json(result);
      else
        res.json(result);
    } catch (err) {
      res.status(500).end();
    }
  });

app.get('/api/cpu/:id',
  [
    check('id').isInt({ min: 1, max: 100 })
  ],
  async (req, res) => {
    try {
      const result = await dao.getCpu(req.params.build.cpu);
      if (result.error)
        res.status(404).json(result);
      else
        res.json(result);
    } catch (err) {
      res.status(500).end();
    }
  });