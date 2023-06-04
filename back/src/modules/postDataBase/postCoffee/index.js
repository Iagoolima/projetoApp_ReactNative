const express = require('express');
const cors = require('cors');

const router = express.Router();

const db = require('../../../database/index');
router.use(cors());

router.post('/', (req, res) => {
    const { nome, coffee, date } = req.body;
    console.log(`Tentativa de salvar seleção: ${coffee} para o usuario ${nome} `)
  
  
    db.query(
      'INSERT INTO coffe_selections (nome, coffee, date) VALUES (?, ?, ?)',
      [nome, coffee, date],
      (error, results) => {
        if (error) {
          console.log(`erro ao salvar café ${error}`)
          res.sendStatus(500);
        } else {
          console.log(`seleção salva com sucesso : ${coffee}`);
          res.sendStatus(200)
        }
      }
    )
  
  })

  module.exports = router;