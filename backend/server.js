require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose')
const path = require('path');  // ← AJOUTE ÇA
const workoutRoutes = require('./routes/workouts');

const app=express()
//middleware
app.use(express.json())
app.use((req,res,next)=> {
    console.log(req.path,req.method)
    next()
})
//routes
app.use('/api/workouts',workoutRoutes)
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
 //listen for request
 app.listen(process.env.PORT,()=>{
    console.log('listening on port 4000')
});

})
.catch((error)=>{
    console.log(error)
})


process.env


process.env
