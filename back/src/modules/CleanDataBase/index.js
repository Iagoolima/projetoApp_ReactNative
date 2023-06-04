const db = require('../../database/index');

const cleanDatabase = () => {
    console.log('executando limpeza do db café')
    db.query(
      'DELETE FROM coffe_selections',
      (error, results) => {
        if (error) {
          console.log(`Erro ao limpar banco de dados do café ${error}`);
  
        } else {
          console.log('Limpeza banco de dados do café realizada com sucesso');
  
        }
      }
    )
    console.log('executando limpeza do almoço')
    db.query(
      'DELETE FROM food_selections',
      (error, results) => {
        if (error) {
          console.log(`Erro ao limpar banco de dados do almoço ${error}`);
  
        } else {
          console.log('Limpeza banco de dados do almoço realizada com sucesso');
  
        }
      }
    )
  };
  module.exports = cleanDatabase