import express from 'express';
import fs from 'fs'

const app = express();

app.post('/update', (req, res) =>{
    fs.writeFile('/db.txt', req.body);
    res.send('update')
})