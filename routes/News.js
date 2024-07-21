const express = require('express');
const { fetchAllNews,fetchNewsById} = require('../controller/News');


const router = express.Router();


router.get('/', fetchAllNews)
      .get('/:id', fetchNewsById)

exports.router = router;