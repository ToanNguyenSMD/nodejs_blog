const mongoose = require('mongoose');

async function connnect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
      // useNewUrlParser: true,
      // useUnifiedTopology:true
    });
    console.log('connect successfully');
  } catch (error) {
    console.log('connnect fail');
  }
}

module.exports = { connnect };
