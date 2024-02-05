const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../utils/secretKey");

const authenticateTokenMiddleware = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token is not valid" });
    }

    console.log(decoded);
    next();
  });
};

module.exports = { authenticateTokenMiddleware };
