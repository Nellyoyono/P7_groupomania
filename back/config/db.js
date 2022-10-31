
//Importation de Mongoose :
const mongoose = require('mongoose');

//Importation de dotenv pour les variables d'environement :
const dotenv = require("dotenv").config();

//---connection Base de données Mongoose------//
mongoose.connect('mongodb+srv://Piiquanteprojet2209:teste@cluster0.owwqvaf.mongodb.net/?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

    
//Exportation mongoose :    
module.exports = mongoose;

