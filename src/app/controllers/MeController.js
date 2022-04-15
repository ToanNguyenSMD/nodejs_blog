const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {

  //[GET] /me/storedCourses
  storedCourses(req, res, next) {

    



    Promise.all([Course.find(), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) => {
        // let data = [
        //   {
        //     start: '12',
        //     end: '20'
        //   },
        //   {
        //     start: '13',
        //     end: '22'
        //   },
        //   {
        //     start: '12',
        //     end: '20'
        //   },
        //   {
        //     start: '14',
        //     end: '21'
        //   },
        //   {
        //     start: '13',
        //     end: '11'
        //   },
        // ]
        // var countList = data.reduce(function(p, c){
          
        //   p[c.start] = (p[c.start] || 0) + 1;
        //   return p;
        // }, {});
        
        // var result = data.filter(function(obj){
         
        //   return countList[obj.start] == 2;
        // });
        // let xx = []
        // data.forEach(element => {
        //   if(countList[element.start] == 2) {
        //     xx.push(element.start)
        //   }
        // })
        // console.log('xx', xx)
        // console.log('countList1', countList)
        // console.log('result1', result)
        
        res.render('me/stored-courses', {
          courses: multipleMongooseToObject(courses),
          deletedCount
        }
        );
      })
      .catch(next)


    // Course.countDocumentsDeleted()
    //   .then(deletedCount=>{
    //     console.log('deletedCount', deletedCount)
    //   })
    //   .catch(()=>{
        
    //   })
    // Course.find()
    //   .then(courses =>{
    //     res.render('me/stored-courses', {
    //       courses: multipleMongooseToObject(courses)
    //     }
    //     );
    //   })
    //   .catch(next)
  }

  //[GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => {
        res.render('me/trash-courses', {
          courses :multipleMongooseToObject(courses)
        })
      })
      .catch(next)
  }
}

module.exports = new MeController();
