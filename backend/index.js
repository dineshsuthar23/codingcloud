const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const User = require('./mongoschema');
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/codingcloud')
    .then(() => {
        console.log('mongodb connected successfully')
    })
    .catch((err) => {
        console.log(err)
    })

app.get('/users', async (req, res) => {
    let data = await User.find()
    res.send(data)
})
app.get('/users/:id', async (req, res) => {
    let data = await User.find({ _id: req.params.id })
    res.send(data)
})


app.post('/register', async (req, res) => {
    try{
        let {name, email, password,date} = req.body;

        let exist = await User.findOne({email});
        if(exist) throw "User already exist"
        let bry = await bcrypt.hash(password, 10)
        let usr = new User({
            name,
            email,
            password: bry,
            date
        })
        let rs = await usr.save()
        if(!rs) throw "DB error"
        res.send("All done")

    }catch(error){
        console.log(error)
    }


    // try {
    //     let newUser = new User({
    //         name : req.body.name,
    //         email : req.body.email,
    //         password : req.body.password
    //     });

    //     let data = await newUser.save();
    //     if (data) {
    //         res.send({ message: 'user Registered successfully', data })
    //     } else {
    //         res.send({ message: 'user not Registered', data })
    //     }
    // } catch (error) {
    //     console.log('Some error occured: ', error)
    // }
})


app.delete('/users/:id', async (req, res) => {
    let id = req.params.id;
    let response = await User.findByIdAndDelete(id);
    if (response) {
        res.send('User deleted');
    } else {
        res.send("user not found");
    }
})



app.put('/users/:id', async (req, res) => {
    let id = req.params.id;
    let response = await User.findByIdAndUpdate(id, req.body);
    if (response) {
        res.send('User updated');
    } else {
        res.send("user not found");
    }
})

app.listen(5000, () => {
    console.log('server is running on port 5000')
})