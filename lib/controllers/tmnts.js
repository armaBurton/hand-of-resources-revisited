const { Router } = require('express');
const TMNT = require('../models/TMNT');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const tmnt = await TMNT.getAll(req.body);
      if (!tmnt) {
        const error = new Error('No Mutants Exist');
        error.status = 404;
        throw error;
      }

      res.json(tmnt);
    } catch (error) {
      next(error);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const tmnt = await TMNT.getById(id);

      if (!tmnt) {
        const error = new Error(
          `No character matching id ${id} currently exists`
        );
        error.status = 404;
        throw error;
      }

      res.json(tmnt);
    } catch (error) {
      next(error);
    }
  })

  .post('/', async (req, res, next) => {
    try {
      const tmnt = await TMNT.insert(req.body);

      if (!tmnt) {
        const error = new Error('Oof, that`s not a character');
        error.status = 404;
        throw error;
      }
      res.json(tmnt);
    } catch (error) {
      next(error);
    }
  });
