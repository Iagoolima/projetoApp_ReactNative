const express = require('express');
const cors = require('cors');

const router = express.Router();

const db = require('../../../database/index');
router.use(cors());

router.delete('/', (req, res) => {
    const { nome, coffee } = req.query;
    console.log(`Tentativa de remover seleção: ${coffee} para o usuário ${nome}`);
  
    db.query(
      'DELETE FROM coffe_selections WHERE nome = ? AND coffee = ?',
      [nome, coffee],
      (error, results) => {
        if (error) {
          console.log(`Erro ao remover a seleção ${error}`);
          res.sendStatus(500);
        } else {
          console.log(`Seleção removida com sucesso: ${coffee} e nome ${nome}`);
          res.sendStatus(200);
        }
      }
    );
  });
  

  module.exports = router;