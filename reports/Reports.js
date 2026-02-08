// import fs from 'fs/promises';

import { response } from "express";

// const fs = require('fs')
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
console.log(event)
event.preventDefault();

const formData = new FormData(form);
const data = Object.fromEntries(formData.entries());
data.time = new Date().toJSON()
const local = localStorage.getItem('item')
JSON.parse(local)
console.log(typeof local);

local.push(data)
JSON.stringify(local)
localStorage.setItem("item", local)

console.log(data);
});
function sendData(data){
    fetch('127.0.0.1:5000/update', {
        method: 'POST'
    }).then(
        data => response.json()
    ).then(
        data => console.log(data)
        
    )
}