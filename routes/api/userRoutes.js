const router = require('express').Router();
const {
  getAllUsers
} = require('../../controllers/user.js');
// this route matches /api/user/
router.route('/').get(getAllUsers)

module.exports = router;
