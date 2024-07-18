const jwt = require('jsonwebtoken');

const tokenControl = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ status: false, message: "Token null" });
    }

    jwt.verify(token, process.env.mykey, (error, data) => {
        if (error) {
            return res.status(403).json({ status: false, message: error.message });
        }
        req.data = data;
        next();
    });
};

module.exports = tokenControl;
