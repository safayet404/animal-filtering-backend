const express = require('express')
const { createAnimal, getAllAnimal, getSingleAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalController')
const router = express.Router()


router.post('/create-animal',createAnimal)
router.get('/all-animal',getAllAnimal)
router.get('/single-animal/:id',getSingleAnimal)
router.patch('/update-animal/:id',updateAnimal)
router.delete('/delete-animal/:id',deleteAnimal)

module.exports = router

