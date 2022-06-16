const { Router } = require('express');
const TMNT = require('../models/TMNT');

module.exports = Router().get('/', async (req, res, next) => {
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
});
