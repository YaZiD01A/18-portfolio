const User = require ("../models/User")
const Thought = require ("../models/Thought")

const userController = {
    getAllUsers (req, res) {
        User.find()
            .then((userData)=> {
                res.json(userData)

            }
        )
        .catch((err) => {
            res.status(500).json(err)
        })
    },

}

module.exports = userController