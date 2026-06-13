require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');  // ← AJOUTE ÇA
const workoutRoutes = require('./routes/workouts');

const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes API (AVANT les fichiers statiques)
app.use('/api/workouts', workoutRoutes);

// servir le frontend en production (APRÈS les routes API)
app.use(express.static(path.join(__dirname, 'public')));  // ← AJOUTE ÇA

app.get('*', (req, res) => {  // ← AJOUTE ÇA (catch-all pour React Router)
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
})
.catch((error)=>{
    console.log(error)
})


process.env
