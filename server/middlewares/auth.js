import jwt from 'jsonwebtoken';

const userAuth = (req, res, next) => {
    console.log("HEADERS:", req.headers);
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.json({ success: false, message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.id) {
            req.user = { id: decoded.id }; // <-- set here!
            next();
        } else {
            return res.json({ success: false, message: 'Not decoded token' });
        }
    } catch (error) {
        return res.json({ success: false, message: ' no token' });
    }
};

export default userAuth;