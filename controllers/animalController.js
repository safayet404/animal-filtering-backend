const asyncHandler = require('express-async-handler')
const Animal = require('../models/animalModel')


const createAnimal = asyncHandler(async(req,res)=>{
    try{
        const admin = await Animal.create(req.body)
        res.json(admin)

    }catch(error)
    {
        throw new Error(error)
    }
})



const getAllAnimal = asyncHandler(async(req,res)=>{
    try{
        const allAnimal = await Animal.find().sort({_id : - 1});
        res.json(allAnimal)

    }catch(error)
    {
        throw new Error(error)
    }
})

const getSingleAnimal = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const singleAnimal = await Animal.findById(id)
        res.json(singleAnimal)

    }catch(error)
    {
        throw new Error(error)
    }
})

const updateAnimal = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params
        const animalUpdate = await Animal.findByIdAndUpdate(id,req.body,{new:true})
        res.json(animalUpdate)
    }catch(error)
    {
        throw new Error(error)
    }
})

const deleteAnimal = asyncHandler(async(req,res)=>{
    try{

        
        const {id} = req.params
        const animal = await Animal.findById(id)

        if(!animal)
        {
            res.json({message : "Already Deleted"})
        }
        else
        {

            const animalDelete = await Animal.findByIdAndDelete(id)
            res.json(animalDelete)
        }

    }catch(error)
    {
        throw new Error(error)
    }
})

module.exports = {
  createAnimal,
  getAllAnimal,
  getSingleAnimal,
  updateAnimal,
  deleteAnimal
}
