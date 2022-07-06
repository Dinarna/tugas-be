const jwt = require('jsonwebtoken');
module.exports = {
    auth: async (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    },
    generateToken: (user) => {
        return jwt.sign({
            userId: user._id
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
        });
    }
}