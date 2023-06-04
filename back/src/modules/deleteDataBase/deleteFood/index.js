const express = require('express');
const cors = require('cors');

const router = express.Router();

const db = require('../../../database/index');
router.use(cors());

router.delete('/', (req, res) => {
    const { nome, food } = req.query;
    console.log(`Tentativa de remover seleção: ${food}`)
  
    db.query(
      'DELETE FROM food_selections WHERE nome = ? AND food= ?',
      [nome, food],
      (error, results) => {
        if (error) {
          console.log(`Erro ao remover a seleção do almoço ${error}`);
          res.sendStatus(500);
        } else {
          console.log(`Seleção removida com sucesso: ${food} e nome ${nome}`);
          res.sendStatus(200);
        }
      }
    );
  });

  module.exports = router;