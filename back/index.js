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

app.listen(port, () => {
  console.log(`Servidor do back end está rodando na porta ${port}.`);
});