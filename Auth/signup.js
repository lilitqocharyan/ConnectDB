const router = require('express').Router()
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize')
const sequelize = require('../connectDB')
const User = require('../Models/Users')
const Farmer = require('../Models/Farmers')
const Slaughterhouse = require('../Models/Slaughterhouses')
const bodyParser = require('body-parser')
router.use(bodyParser.json())

//type can be 1 or 2 
//if signup as farmer type is 1
//if signup as slaughterhouse type is 2
router.post('/signup/:type', async(req,res)=>{   
  let transaction;
try {
  // get transaction
   transaction = await sequelize.transaction();
    //step 1
    //hashing password
    const salt = await bcrypt.genSalt(15);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    //create User
  await User.create({
  Email: req.body.email,
  Password: hashPassword
               
  }, {transaction});
//step 2
sequelize.query("SELECT TOP 1 ID FROM Users ORDER BY ID DESC", { type: sequelize.QueryTypes.SELECT},{transaction})
 .then(async function(user) {
   const userid = user[0].ID
// step 3
if(req.params.type == 1) {
  await Farmer.create({
    FirstName: req.body.firstName,
    LastName: req.body.lastName,
    Region: req.body.region,
    City: req.body.city,
    Address: req.body.address,
    UserID: userid
    }, {transaction});
} else {
  await Slaughterhouse.create({
    Name: req.body.name,
    Region: req.body.region,
    City: req.body.city,
    Address: req.body.address,
    UserID: userid
    }, {transaction});
    }
     // commit
  await transaction.commit();
  console.log('ok')
 })

} catch (err) {
    console.log(err)
  if(transaction) await transaction.rollback();
}
})
module.exports = router