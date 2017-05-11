'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViccSchema = new Schema({
    cim: {
        type: String,
        required: [true, 'Cim szukseges'],
        trim: true
    },
    tartalom: {
        type: String,
        required: [true, 'Tartalom szukseges'],
        trim: true
    },
    tag: {
        type:String,
        required: [true, 'Kategória szükséges!'],
        trim: true
    },
    rate: {
        type: [Number],
        min: [1, 'Minimalis ertekeles: 1 pont'],
        max: [10, 'Maximalis ertekeles: 10 pont']
    },
    voteUp: {
        type: Number
    },
    voteDown: {
        type: Number
    }
});

const Vicc = mongoose.model('Vicc', ViccSchema);

module.exports.Vicc = Vicc;