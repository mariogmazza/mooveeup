const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type:String,
        unique:true
    },
    overview: String,
    release_date: String,
    backdrop_path: String,
    poster_path: String,
    vote_average: Number,
    genre_ids: Array,
    created:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Movie', movieSchema);