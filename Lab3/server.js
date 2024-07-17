// http://127.0.0.1:3000/

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const CarModel = require('./carModel');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const uri = 'mongodb+srv://admin2:admin2@cluster0.1yyztnl.mongodb.net/MD18402';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error: ", err);
    });

// Middleware to check MongoDB connection
app.use((req, res, next) => {
    if (mongoose.connection.readyState !== 1) {
        return res.status(500).send('MongoDB not connected');
    }
    next();
});

app.listen(port, () => {
    console.log(`Connecting on port ${port}`);
});

app.get('/', async (req, res) => {
    try {
        let testdatas = await CarModel.find();
        res.send(testdatas);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/add_xe', async (req, res) => {
    try {
        let testdata = req.body;
        let kq = await CarModel.create(testdata);
        console.log(kq);

        let testdatas = await CarModel.find();
        res.send(testdatas);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/xoa/:id', async (req, res) => {
    try {
        let id = req.params.id;
        console.log(id);

        await CarModel.deleteOne({ _id: id });
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/update/:ten', async (req, res) => {
    try {
        let tenXe = req.params.ten;
        console.log(tenXe);

        let tenXeMoi = tenXe + ' Phien ban moi';

        await CarModel.updateOne({ ten: tenXe }, { ten: tenXeMoi });

        let cars = await CarModel.find({});
        res.send(cars);
    } catch (err) {
        res.status(500).send(err);
    }
});
