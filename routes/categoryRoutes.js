const express = require('express')
const { createCategory, getAllCategory, getSingleCategory, updateCategory, deleteCategory } = require('../controllers/categoryController')
const router = express.Router()


router.post('/create-category',createCategory)
router.get('/all-category',getAllCategory)
router.get('/single-category/:id',getSingleCategory)
router.patch('/update-category/:id',updateCategory)
router.delete('/delete-category/:id',deleteCategory)

module.exports = router

