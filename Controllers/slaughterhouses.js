const router = require('express').Router()
const verify = require('../Auth/verifyToken')
const Slaughterhouse = require('../Models/Slaughterhouses')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

//get all Slaughterhouses
router.get('/getSlaughterhouses',(req,res) => {
    Slaughterhouse.findAll({
        attributes: ['Name','Region','City','Address'],
        raw: true
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})

//get  Slaughterhouse by id
router.get('/getSlaughterhouse/:id',(req,res) => {
    Slaughterhouse.findAll({
        attributes: ['Name','Region','City','Address'],
        raw: true,
        where: {
            SlaughterhouseID: req.params.id
        }
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})


//insert  Slaughterhouse 
router.post('/insertSlaughterhouse',(req,res) => {
    Slaughterhouse.create({
        Name: req.body.name,
        Region: req.body.region,
        City: req.body.city,
        Address: req.body.address
    })
    .then(data => {
        res.send('inserted')
    })
    .catch(err => {
        console.log(err)
    })
})


//delete Slaughterhouse by id 
router.delete('/deleteSlaughterhouse/:id',(req,res) => {
    Slaughterhouse.destroy({
        where: {
            SlaughterhouseID: req.params.id
        }
    })
    .then(data => {
        res.send('deleted')
    })
    .catch(err => {
        console.log(err)
    })
})


//update Slaughterhouse by id 
router.put('/updateSlaughterhouse/:id',(req,res) => {
    Slaughterhouse.update({
        Name: req.body.name,
        Region: req.body.region,
        City: req.body.city,
        Address: req.body.address
    }, {
        where: {
            SlaughterhouseID : req.params.id
        }
    })
    .then(data => {
        res.send('updated')
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router
