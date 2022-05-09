const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const path = require('path');
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');
// const User = require('./models/User');
// const Sauce = require('./models/Sauce');

const MY_PORT = process.env.PORT;
const MY_APP_SECRET = process.env.APP_SECRET;
mongoose.connect(MY_APP_SECRET,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));
        
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

module.exports = app;