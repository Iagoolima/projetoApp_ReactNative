  const express = require('express');
  const cors = require('cors');

  const app = express();
  const port = 3001;
  const db = require('./src/database/index');

  app.use(cors());
  app.use(express.json());

  app.post('/login', (req, res) => {
    const { user, nome } = req.body;
    console.log(`tentativa de login com ${user}`);
          

    db.query(
      'SELECT * FROM login WHERE user = ?',
      [user, nome],
      (error, results) =>{
              if(error){
                  console.log(`erro ao executar a query ${error}`);
                  res.sendStatus(500);
              }else{
                  if(results.length > 0) {
                    const usuario = {
                      user: results[0].user,
                      nome: results[0].nome
                    };
                      console.log(`usuario encontrado ${results[0].user} e ${results[0].nome}`);
                      res.status(200).json(usuario);
                  } else{
                      console.log('usuario não encontrado');
                      res.sendStatus(401);
                  }
          }
      }
    )
  });



  app.post('/dbcoffee', (req, res) => {
    const {nome, coffee, date } = req.body;
    console.log(`Tentativa de salvar seleção: ${coffee} para o usuario ${nome} `)


  db.query(
      'INSERT INTO coffe_selections (nome, coffee, date) VALUES (?, ?, ?)',
      [nome, coffee, date],
      (error, results) => {
        if(error){
          console.log(`erro ao salvar ${error}`)
          res.sendStatus(500);
        }else{
          console.log(`seleção salva com sucesso : ${coffee}`);
          res.sendStatus(200)
        }
      }
  )

  })

  app.delete('/dbcoffee', (req, res) => {
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

  app.listen(port, () => {
    console.log(`Servidor do back end está rodando na porta ${port}.`);
  });