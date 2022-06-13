const mongoose = require('mongoose');

// On crée un schéma de données avec les champs requis pour une sauce
const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: false, default: 0 },
    dislikes: { type: Number, required: false, default: 0 },
    usersLiked: { type: Array, required: false, default: [] },
    usersDisliked: { type: Array, required: false, default:[] },
});

// On exporte le schéma en tant que modèle Mongoose, on le rend ainsi disponible pour notre application express
module.exports = mongoose.model('Sauce', sauceSchema);