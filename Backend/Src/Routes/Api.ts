import express from 'express'
import ApiController from '../Controllers/ApiController'

const router = express.Router()

router.get('/:id', ApiController.GetPokemon);
router.delete('/id', ApiController.DeletePokemon)

export default router;