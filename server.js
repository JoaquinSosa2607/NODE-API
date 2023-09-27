const express =require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel');


app.use(express.json());

//routes

app.get('/', (req,res) => {

    res.status(200).json({

        "msj": "Everything All Right"
    })
})

app.get('/products', async (req,res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
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

 // Update a Product
app.put('/products/:id', async (req,res) => {

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID: ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
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