const router = require('express').Router()

let user = require("./includes/user")


router.route("/register")
    .post(user.register)
    .get(user.get)

router.route("/login")
    .post(user.login)

module.exports = router;