const express =require('express');
const app = express();

//routes

app.get('/', (req,res) => {

    res.status(200).json({

        "msj": "Que onda"
    })
})

app.listen(3000,() => {
    console.log('Server running on port 3000');
});