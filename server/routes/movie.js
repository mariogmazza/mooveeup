const router = require('express').Router();

const handle = require('../handlers');
const auth = require('../middlewares/auth');

router.route('/')
.get(handle.showMovies)
.post(auth, handle.saveWishedListed);


module.exports = router;