
const port = 3000;
const express = require("express");
const app = express();
let fruits = [{id:1, fruit:'Apple', size:'Large', color:'red'}];
app.use(express.json());

// test
app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201);
    res.send('Welcome to Express!');
});

//új gyumolcs rögzítése
app.post('/fruits', (req,res) => {
    console.log(req.body)
    let newfruit = req.body;
    fruits.push(newfruit);
    res.send(`New fruit details: name: ${newfruit.fruit}, size: ${newfruit.size}, color: ${newfruit.color}`)
});

// összes gyumolcs lekérdezése
app.get('/fruits', (req,res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.json(fruits);
});

// módosítás
app.put('/fruits/:id', (req,res)=> {
    console.log(req.params.id);
    let id = req.params.id;
    let newfruit = req.body;
    fruits[id] = newfruit;
    res.send(`Updated data: ${fruits[id].fruit}, ${fruits[id].size}, ${fruits[id].color}`);
});
//törlés
app.put('/fruits/:id', (req,res)=> {
    let id = req.params.id;
    fruits.splice(id, 1);
    res.send(`Delete data: ${fruits[id].fruit}, ${fruits[id].size}, ${fruits[id].color}`);
});
app.listen(port, ()=>{
    console.log(`Express server started on ${port}`);
});