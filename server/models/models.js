'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViccSchema = new Schema({
    cim: {
        type: String,
        required: [true, 'Cim szukseges']
    },
    tartalom: {
        type: String,
        required: [true, 'Tartalom szukseges']
    },
    tag: String,
    rate: {
        type: [Number],
        min: [1, 'Minimalis ertekeles: 1 pont'],
        max: [10, 'Maximalis ertekeles: 10 pont']
    }
});

const Vicc = mongoose.model('Vicc', ViccSchema);

module.exports.Vicc = Vicc;