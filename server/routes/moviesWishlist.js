const router = require('express').Router();

const handle = require('../handlers');
const auth = require('../middlewares/auth');

router
    .route('/')
    .post(auth, handle.saveWishedListed);

router
    .route('/user')
    .get(auth, handle.showUserWishlist);

router
    .route('/:id')
    .get(auth,handle.getMovieWished)
    .delete(auth, handle.deleteFromWishlist)

module.exports = router;