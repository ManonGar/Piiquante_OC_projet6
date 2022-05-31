const pswdSchema = require('../models/Password');

module.exports = (req, res, next) => {
    if (!pswdSchema.validate(req.body.password)) {
        return res.status(400).json({ message: "Invalid password." });
    } else {
        next();
    }
};