const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true,
    },
    namsx: {
        type: Number,
        required: true,
    },
    hang: {
        type: String,
        required: true,
    },
    gia: {
        type: Number,
        required: true,
    },
});

const CarModel = new mongoose.model('testdata', CarSchema);

module.exports = CarModel;