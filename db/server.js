import express from 'express';
import cors from 'cors';
import fs from 'fs'


const app = express();
app.use(cors());

app.post('/update', (req, res) =>{
    // fs.writeFile('/db.txt', req.body);
    console.log(req);
    localStorage.setItem('data', '')
    res.send(req.body)
})

app.listen(5000, ()=>{
    console.log('listining on port 5000');
    
})