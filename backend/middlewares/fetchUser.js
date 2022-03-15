var jwt = require('jsonwebtoken');
const JWT_SECRET = "SecretKoSecretRhendoBhadwe" ;

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user; //req ke user wale part me ye data de diya, now it can be used elsewhere using req.user
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;