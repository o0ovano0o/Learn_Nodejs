const model = require('../../model/user.model')
const bcrypt = require('bcrypt');
module.exports = {
    get: (req, res) => {
        res.status(200).json({ data: "please register first" })
    },
    register: async(req, res) => {
        if (JSON.stringify(req.body) === JSON.stringify({}) || !req.body.password || !req.body.username || !req.body.email) {
            return res.status(403).json({
                status: "error",
                msg: "Data empty"
            })
        }
        let hash = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hash
        let checkEmail = await model.User.findOne({ "email": req.body.email })
        if (checkEmail) {
            return res.status(403).json({
                status: "error",
                msg: "Email is not avalable"
            })
        }

        let user = new model.User(req.body);
        user.save((err) => {
            if (err) {
                return res.status(403).json({
                    status: "error",
                    msg: "Something bad happened "
                })
            }
            return res.status(200).json({
                status: "success",
                msg: "Created"
            })
        })
    },
    login: async(req, res) => {
        // check body empty
        if (JSON.stringify(req.body) === JSON.stringify({}) || !req.body.password || !req.body.email) {
            return res.status(403).json({ status: "error", msg: "Data empty" })
        }
        //check email 
        let ErrorData = false;
        let checkEmail = await model.User.findOne({ "email": req.body.email })
        if (!checkEmail) {
            ErrorData = true;
        }
        //get user info and check password
        model.User.find({ "email": req.body.email }, (error, userInfo) => {
            if (error) {
                return res.status(403).json({ status: "error", msg: error })
            }
            userInfo = userInfo[0]
                // check Password           
            console.log(req.body.password, '\n', userInfo.password);
            if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
                ErrorData = true;
            }
            if (ErrorData) {
                return res.status(403).json({ status: "error", msg: "Sai tai khoan hoac mat khau" })
            }
            return res.status(200).json({ status: "success", data: userInfo })
        })
    }



}