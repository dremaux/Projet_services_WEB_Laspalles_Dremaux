const express = require('express');
const ActorController = require('../controllers/ActorController');

const router = express.Router();

router.get('/:id', ActorController.actor_get);
router.put('/:id', ActorController.actor_update);
router.get('/', ActorController.actor_list);
router.post('/', ActorController.actor_create);
router.delete('/:id', ActorController.actor_delete);

module.exports = router;