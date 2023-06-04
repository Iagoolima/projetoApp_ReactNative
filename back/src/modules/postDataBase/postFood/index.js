const express = require('express');
const cors = require('cors');

const router = express.Router();

const db = require('../../../database/index');
router.use(cors());

router.post('/', (req, res) => {
    const { nome, food, date } = req.body;
    console.log(`tentativa de salvar seleção: ${food} para o usuario ${nome}`)
  
    db.query(
      'INSERT INTO food_selections(nome, food, date) VALUES (?, ?, ?)',
      [nome, food, date],
      (error, results) => {
        if (error) {
          console.log(`erro ao salvar almoço ${error}`)
          res.sendStatus(500);
        } else {
          console.log(`seleção salva com sucesso: ${food}`)
          res.sendStatus(200)
        }
      }
    )
  })


  module.exports = router;