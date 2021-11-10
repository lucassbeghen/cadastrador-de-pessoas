// importar o express
const express = require('express');

//criar uma aplicação em express
const app = express();

//fazer com que a aplicação express atenda a uma requisição
app.get("/", (req,res)=>{
    res.send("Olá!");
    console.log("Deu certo!...até certo ponto...");
} )

//criar uma rota get '/pessoas' que deve retornar as pessoas para o cliente
app.get('/pessoas', (req,res) => {
    let pessoas = require('./database/pessoas.json');
    res.send(pessoas)
})

//criar uma rota get '/pessoas/1' que deve retornar a pessoa da posição 1 para o cliente
app.get('/pessoas/:id', (req,res) => {
    let id = req.params.id;
    let pessoaUm = require ('./database/pessoas.json');
    res.send(pessoaUm[id].nome)
})

//levantar a aplicação (fazer com que a aplicação fique de prontidão)
app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
});