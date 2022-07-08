const express = require('express');
const FilmController = require('../controllers/FilmController');

const router = express.Router();

router.get('/:id', FilmController.film_get);
router.put('/:id', FilmController.film_update);
router.get('/', FilmController.film_list);
router.post('/', FilmController.film_create);
router.delete('/:id', FilmController.film_delete);

module.exports = router;