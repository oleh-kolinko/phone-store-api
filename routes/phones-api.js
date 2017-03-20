const express = require('express');
const router  = express.Router();
const Phone = require('../models/phone.js');

router.get('/phones', (req, res, next) => {
  Phone.find({}, (err,result)=>{
    if(err) return res.json(err);
    res.json(result);
  });
});

router.post('/phones', (req, res, next) => {
  const newDoc = new Phone(req.body);
  newDoc.save( (err,result)=>{
    if(err) return res.json(err);
    res.json(result);
  });
});

router.get('/phones/:id', (req, res, next) => {
  const id = req.params.id;

  if(!mongoose.Type.ObjectId.isValid(id)){ //check if id is valid
    res.status(400).json({ message: 'Specified id is not valid'} ) ;
  }

  Phone.findById(id, (err,result)=>{
    if(err) return res.json(err);
    res.json(result);
  });
});

router.put('/phones/:id', (req, res, next) => {
  const id = req.params.id;

  if(!mongoose.Type.ObjectId.isValid(id)){ //check if id is valid
    res.status(400).json({ message: 'Specified id is not valid'} ) ;
  }
  
  const updatedDoc = req.body;

  Phone.findByIdAndUpdate(id, updatedDoc, (err,result)=>{
    if(err) return res.json(err);
    res.json(result);
  });
});

router.delete('/phones/:id', (req, res, next) => {
  const id = req.params.id;

  if(!mongoose.Type.ObjectId.isValid(id)){ //check if id is valid
    res.status(400).json({ message: 'Specified id is not valid'} ) ;
  }

  Phone.findByIdAndRemove(id, (err,result)=>{
    if(err) return res.json(err);
    res.json(result);
  });
});

module.exports = router;
