const asyncHandler = require('express-async-handler')
const Category = require('../models/categoryModel')


const createCategory  = asyncHandler(async(req,res)=>{
    try{
        const addCategory = await Category.create(req.body)
        res.json(addCategory)
    }catch(error)
    {
        throw new Error(error)
    }
})

const getAllCategory = asyncHandler(async(req,res)=>{
    try{
        const allCategory = await Category.find()
        res.json(allCategory)
    }catch(error)
    {
        throw new Error(error)
    }
})


const getSingleCategory = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleCategory = await Category.findById(id)
        res.json(singleCategory)

    }catch(error)
    {
        throw new Error(error)
    }
})


const updateCategory = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const categoryUpdate = await Category.findByIdAndUpdate(id,req.body,{new : true})
        res.json(categoryUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})


const deleteCategory = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const deleteCategory = await Category.findByIdAndDelete(id)
        res.json(deleteCategory)
    }catch(error)
    {
        throw new Error(error)
    }
})


module.exports ={
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory
}