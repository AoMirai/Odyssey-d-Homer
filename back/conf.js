
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // adresse du serveur
  user: 'root', // le nom d'utilisateur
  password: 'o-g.9liQ!', // le mot de passe
  database: '', // le nom de la base de données
});
module.exports = connection;