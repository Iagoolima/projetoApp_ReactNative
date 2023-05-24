const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'0225',
    database: 'app_sesi'
});

db.connect((error) => {
    if (error) {
      console.log(`Erro ao conectar no banco de dados: ${error}`);
    } else {
      console.log('Conexão bem-sucedida ao banco de dados');
    }
});

module.exports = db; 
