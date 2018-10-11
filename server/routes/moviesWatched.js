const router = require('express').Router();

const handle = require('../handlers');
const auth = require('../middlewares/auth');

router
    .route('/')
    .post(auth, handle.saveWatchedBy);

router
    .route('/user') 
    .get( auth, handle.showUserWatched); 

    router
    .route('/:id')
    .get(handle.getMovieWatched)
    .delete(auth, handle.deleteFromWatched)


module.exports = router;