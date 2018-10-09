const db = require('../models');

exports.showMovies = async (req, res, next) => {
    try {
        const movies = await db.Movie.find().populate('user', ['username', 'id']);

        res.status(200).json(movies);

    } catch (err) {
        return next({
            status: 400,
            message: err.message
        });
    }
};

exports.saveWishedListed = async (req, res, next) => {
    try {

        const { id } = req.decoded;
        const user = await db.User.findById(id);

        const {
            title,
            overview,
            release_date,
            backdrop_path,
            poster_path,
            vote_average,
            genre_ids
        } = req.body;

        const movie = await db.Movie.create({
            title,
            overview,
            release_date,
            backdrop_path,
            poster_path,
            vote_average,
            genre_ids
        })
        user.wishedListed_by.push(movie._id);
        await user.save();

        //maybe here i need to do this=> 
        // res.status(201).json(movie);

        res.status(201).json({...movie._doc, user: user._id});


    } catch (err) {
        return next({
            status: 400,
            message: err.message
        });
    }
}