const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
const db = require('./src/database/index');

app.use(cors());
app.use(express.json());

const cron = require('node-cron');//timer de enviar no horario programado 

const loginRouter = require('./src/modules/login')//rota para login 

const postCoffeeRouter= require('./src/modules/postDataBase/postCoffee')//rota para enviar escolha do user para o banco de dados do café
const postFoodRouter= require('./src/modules/postDataBase/postFood')//rota para enviar escolha do user para o banco de dados do almoço

const deleteCoffeeRouter = require('./src/modules/deleteDataBase/deleteCoffee/')//rota para deletar escolha do user para o banco de dados do café
const deleteFoodRouter = require('./src/modules/deleteDataBase/deleteFood/')//rota para deletar escolha do user para o banco de dados do almoço

const coffeeEmailDay = require('./src/modules/submitEmail/coffeeEmail');//rota para envio do email do banco de dados sobre o café
const foodEmailDay = require('./src/modules/submitEmail/foodEmail');//rota para envio do email do banco de dados sobre o almoço

const cleanDatabase = require('./src/modules/CleanDataBase');//limpeza banco de dados

app.use('/login', loginRouter);


//post da escolha do usuario
app.use('/dbcoffee', postCoffeeRouter);
app.use('/dbfood', postFoodRouter);

//delete da escolha do usuario
app.use('/dbcoffee/delete', deleteCoffeeRouter )
app.use('/dbfood/delete', deleteFoodRouter);


cron.schedule('14 13 * * *', coffeeEmailDay);//Envio de email do café

cron.schedule('15 13 * * *', foodEmailDay);//email do email do almoço

cron.schedule('42 00 * * *', cleanDatabase);//função para liompeza de banco de dados


//os email n pode ser programado no mesmo minuto, precisa ser no minimo um minuto após o outro



app.listen(port, () => {
  console.log(`Servidor do back end está rodando na porta ${port}.`);
});



