const express = require('express')

const { UserCollection, AdminCollection } = require('./model/model')
const nid = require("nid")
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.render('index')
})

router.get('/about', (req, res, next)=>{
    res.render('about')
})

router.get('/service', (req, res, next)=>{
    res.render('service')
})

router.get('/menu', (req, res, next)=>{
    res.render('menu')
})

router.get('/reservation', (req, res, next)=>{
    res.render('reservation')
})

router.get('/testimonial', (req, res, next)=>{
    res.render('testimonial')
})

router.get("/pics", async function (req, res, next) {
    res.render("pics");
  });
  
  router.get("/pics/:name", async function (req, res, next) {
   
  
    res.render("single pic", {name: req.params.name});
  });

router.get('/contact', (req, res, next)=>{
    res.render('contact')
})

module.exports = router