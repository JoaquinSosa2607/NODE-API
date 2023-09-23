const express =require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel');


app.use(express.json());

//routes

app.get('/', (req,res) => {

    res.status(200).json({

        "msj": "Que onda pa"
    })
})

app.post('/product', async (req,res) => {
    try{

        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch{
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoose.connect('mongodb+srv://joaquinsosa:mIFg4ZZtr4V1IpoO@mycluster.j7em4ia.mongodb.net/')
.then(() => { 
    console.log('Connected!')
    app.listen(3000,() => {
    console.log('Server running on port 3000');
    });

}).catch((error) => {
    console.log(error)
    });