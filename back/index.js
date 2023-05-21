const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { user } = req.body;

  // Aqui você pode processar os dados do usuário, como realizar validações, consultar o banco de dados, etc.

  // Exemplo de verificação simples
  
  if (user === 'admin') {
    res.status(200).json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

app.listen(port, () => {
  console.log(`Servidor do back end está rodando na porta ${port}.`);
});