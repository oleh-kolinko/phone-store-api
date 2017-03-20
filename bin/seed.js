const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/phone-store');
const Phone = require('../models/phone.js');

const phones = [
  {
    brand: 'Nokia',
    name: '3310',
    image: '',
    specs:  [
    "two months battery life",
    "undestructable"
  ]
  }
];
