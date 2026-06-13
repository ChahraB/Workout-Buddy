const express=require('express');
const {createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout}=require('../controlers/workoutControler')

const router=express.Router();

//get all workouts
router.get('/',getWorkouts)

//get single workouts
router.get('/:id',getWorkout)

//post a new workouts
router.post('/',createWorkout)
//delete workouts
router.delete('/:id',deleteWorkout)
//update workouts
router.patch('/:id',updateWorkout )


module.exports=router