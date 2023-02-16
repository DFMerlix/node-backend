const http = require ('http')
const path =require('path')
const express = require('express')
const app = express()

 app.listen(3000, ()=>{
console.log('run')

})

app.get('/',(req, res)=>{
  res.sendFile(path.resolve(__dirname, 'home-namevalet.html'))

})

app.get('/empresa', (req, res)=>{
  res.send({nombre: 'Diego Florez'})
}) 
/* const fastify = require("fastify")({ logger: true });

fastify.get("/", async (req, res) => {
  console.log(res.body)
  res.send(path.resolve(__dirname, 'home-namevalet.html'))
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start(); */