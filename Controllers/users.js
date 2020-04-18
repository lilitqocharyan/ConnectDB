const router = require('express').Router()
const Sequelize = require('sequelize')
const verify = require('../Auth/verifyToken')
const User = require('../Models/Users')
const Farmer = require('../Models/Farmers')
const Slaughterhouse = require('../Models/Slaughterhouses')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

User.hasOne(Farmer, {foreignKey: "UserID"})
User.hasOne(Slaughterhouse, {foreignKey: "UserID"})

//get all Farmer Users
router.get('/getFarmerUsers',verify,(req,res) => {
    User.findAll({
        attributes: ['Email'],
        include: [
            {
                model: Farmer,
                attributes: ['FirstName','LastName','Region','City','Address'],
                where: {
                    FirstName: {
                        [Sequelize.Op.ne]: null
                    }
                }
            },
        ],
        raw: true
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})


//get all Slaughterhouse Users
router.get('/getSlaughterhouseUsers',verify,(req,res) => {
    User.findAll({
        attributes: ['Email'],
        include: [
            {
                model: Slaughterhouse,
                attributes: ['Name','Region','City','Address'],
                where: {
                    Name: {
                        [Sequelize.Op.ne]: null
                    }
                }
            },
        ],
        raw: true
    })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        console.log(err)
    })
})


// //get  User by id
// router.get('/getUser/:id',verify,(req,res) => {
//     User.findAll({
//         attributes: ['Email'],
//         include: [
//             {
//                 model: Farmer,
//                 attributes: ['FirstName','LastName','Region','City','Address'],
//                 where: {
//                     FirstName: {
//                         [Sequelize.Op.ne]: null
//                     }
//                 }
//             },
//             {
//                 model: Slaughterhouse,
//                 attributes: ['Name','Region','City','Address'],
//                 where: {
//                     Name: {
//                         [Sequelize.Op.ne]: null
//                     }
//                 }
//             }
//         ],
//         raw: true,
//         where: {
//             ID: req.params.id
//         }
//     })
//     .then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// })


//insert  User 
router.post('/insertUser',verify,(req,res) => {
    User.create({
        Email: req.body.email,
        Password: req.body.password
    })
    .then(data => {
        res.send('inserted')
    })
    .catch(err => {
        console.log(err)
    })
})


//delete User by id 
router.delete('/deleteUser/:id',verify,(req,res) => {
    User.destroy({
        where: {
            ID: req.params.id
        }
    })
    .then(data => {
        res.send('deleted')
    })
    .catch(err => {
        console.log(err)
    })
})


//update User by id 
router.put('/updateUser/:id',verify,(req,res) => {
    User.update({
        Email: req.body.email,
        Password: req.body.password
    }, {
        where: {
            ID : req.params.id
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
