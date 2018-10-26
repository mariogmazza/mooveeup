const db = require('../models')

exports.showUserWatched = async (req, res, next) => {
    try {
        const {
            id
        } = req.token

        const user = await db.User.findById(id)
            .populate('watchedBy');

        return res.status(200).json(user.watchedBy)

    } catch (err) {
        return next({
            status: 400,
            message: err.message
        });
    }
}

exports.saveWatchedBy = async (req, res, next) => {
    const { id } = req.token;

    const {
        title,
        overview,
        release_date,
        backdrop_path,
        poster_path,
        vote_average,
        genre_ids
    } = req.body;

    try {

        const user = await db.User.findById(id);

        const movieExist = await db.Movie.find({
            "title": title
        })

        if (typeof movieExist[0]._id === "undefined") {
            console.log("i dont exist in the database")

            const movie = await db.Movie.create({
                title,
                overview,
                release_date,
                backdrop_path,
                poster_path,
                vote_average,
                genre_ids
            });

            user.whatchedBy.push(movie._id);
            await user.save();

            return res.status(201).json({ ...movie._doc,
                user: user._id
            });
        }

        console.log("I exist on the database")
        user.watchedBy.push(movieExist[0]._id);
        await user.save();

        //maybe here i need to do this=> 

        return res.status(201).json({ ...movieExist[0]._doc,
            user: user._id
        });


    } catch (err) {
        return next({
            status: 400,
            message: err.message
        });
    }
}


exports.getMovieWatched = async (req, res, next) => {
    try {
        const {
            id
        } = req.params;

        const movie = await db.Movie.findById(id);

        if (!movie) throw new Error('No movie Found');

        return res.status(200).json(movie)
    } catch (err) {
        return next({
            status: 400,
            message: err.message
        })

    }
}

exports.deleteFromWatched = async (req, res, next) => {

    const {
        id: movieId
    } = req.params;

    const {
        id: userId
    } = req.token;

    try {

        const user = await db.User.update({
            _id: userId
        }, {
            $pull: {
                'watchedBy': movieId
            }
        });

        if (!user) throw new Error('No User found');

        return res.status(202).json({
            user,
            deleted: true
        });


    } catch (err) {
        return next({
            status: 400,
            message: err.message,
        });
    }
};