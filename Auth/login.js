const router = require('express').Router()
const bcrypt = require('bcrypt');
const User = require('../Models/Users')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/login', async(req,res) => {

    const user = await User.findOne({Email: req.body.email});
    if(!user) {
        res.status(400).send('User not found');
    } else {
        //checking password
        const passwordIsValid = await bcrypt.compare(req.body.password,user.password);
        if(!passwordIsValid) {
            res.status(400).send('Password is wrong');
        } else {
            const accessToken = jwt.sign({ID: user.ID}, 'hdjjdygshdkdidkk',{expiresIn: '20s'})
            const refreshToken = jwt.sign({ID: user.ID}, 'hjkyskmdytacvlpot')
            res.status(200).send({accessToken,refreshToken})
        }
    }
});

module.exports = router