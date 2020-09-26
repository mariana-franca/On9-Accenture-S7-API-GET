const express = require('express');
const app = express ();
const porta = 3000;
const mulheres = require ('./mulheres.json');

app.use(express.json());

//Ler toda lista de mulheres
//@route GET mulheres
//@desc Retorna todas a lista mulheres
//@acces Public
app.get('/mulheres',(req,res)=> {
    res.json(mulheres);
});

//Ler somente um ID
//@route GET mulheres
//@desc Retorna um unico ID mulheres
//@acces Public
app.get('/mulheres/:id',(req,res)=> {
    const id = req.params.id
    const listaMulheres = mulheres.find(mulheres => mulheres.id == id);

    //const listaMulheres = mulheres[id];

    res.json(listaMulheres);
});  




app.listen (porta, () => {
    console.log (`App rodando em http://localhost: ${porta}`);
});

