const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express());


app.get('/',async(req,res)=>{
    try{
        res.json({Message:"AOA, WELCOME TO SMIU...."});
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/teacher',async(req,res)=>{
    try{
        const output = await pool.query('select * from teacher');
        res.json(output.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


const PORT = process.env.PORT | 8090;
app.listen(PORT,()=>{
    console.log(`Connect Successfully... Running on Port ${PORT}`);
});
