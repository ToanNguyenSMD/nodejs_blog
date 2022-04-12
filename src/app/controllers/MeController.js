const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {

  //[GET] /me/storedCourses
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses =>{
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses)
        }
        );
      })
      .catch(next)
  }
}

module.exports = new MeController();