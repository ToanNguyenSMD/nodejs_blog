const Course = require('../models/Course')
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose')
class CourseController {


  //[GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
       res.render('courses/show', { course: mongooseToObject(course)})
      })
      .catch(next)
    // res.send('detail course: '+ req.params.slug);
  }

  //[GET] /courses/create
  create(req, res, next) {
    res.render('courses/create')
  }
  //[POST] /courses/store
  store(req, res, next) {
    //  res.json(req.body)
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
    const source = new Course(formData)
    source.save()
      .then(()=> res.redirect('/me/stored/courses'))
      .catch( error => {

      });
  }

   //[GET] /courses/:id/edit
   edit(req, res, next) {
     Course.findById(req.params.id)
      .then(course => res.render('courses/edit', {
        course: mongooseToObject(course)
      }))
      .catch(next)
    
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
      .then(()=> res.redirect('/me/stored/courses'))
      .catch(next)
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.delete({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //[DELETE] /courses/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }

  //[PATCH] /:id/restore
  restore(req, res, next) {
    Course.restore({_id: req.params.id})
      .then(() => res.redirect('back'))
      .catch(next)
  }
}

module.exports = new CourseController();
