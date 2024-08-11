require('dotenv').config();
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors');
const newsRouter = require('./routes/News');
const path = require('path');

const PORT = process.env.PORT;
server.use(express.static(path.resolve(__dirname, 'build')));
server.use(cors());

server.use(express.json());

server.use('/news',newsRouter.router);


main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('database connected');
  }
 
server.listen(PORT, function () {
    console.log("Express App running at http://localhost:8000/");
 })