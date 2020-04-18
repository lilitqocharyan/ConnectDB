const router = require('express').Router()
const verify = require('../Auth/verifyToken')
const Farmer = require('../Models/Farmers')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

//get all Farmers
router.get('/getFarmers',verify,(req,res) => {
    Farmer.findAll({
        attributes: ['FirstName','LastName','Region','City','Address'],
        raw: true
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})

//get  Farmer by id
router.get('/getFarmer/:id',verify,(req,res) => {
    Farmer.findAll({
        attributes: ['FirstName','LastName','Region','City','Address'],
        raw: true,
        where: {
            FarmerID: req.params.id
        }
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})


//insert  Farmer 
router.post('/insertFarmer',verify,(req,res) => {
    Farmer.create({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Region: req.body.region,
        City: req.body.city,
        Address: req.body.address,
    })
    .then(data => {
        res.send('inserted')
    })
    .catch(err => {
        console.log(err)
    })
})


//delete Farmer by id 
router.delete('/deleteFarmer/:id',verify,(req,res) => {
    Farmer.destroy({
        where: {
            FarmerID: req.params.id
        }
    })
    .then(data => {
        res.send('deleted')
    })
    .catch(err => {
        console.log(err)
    })
})


//update Farmer by id 
router.put('/updateFarmer/:id',verify,(req,res) => {
    Farmer.update({
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Region: req.body.region,
        City: req.body.city,
        Address: req.body.address,
    }, {
        where: {
            FarmerID : req.params.id
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
