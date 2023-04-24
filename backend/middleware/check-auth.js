// middleware function to check for authentication using JWT
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // extract the JWT token from the authorization header
    const token = req.headers.authorization.split(" ")[1];

    // verify the token using the JWT secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // add the decoded user data to the request object
    req.userData = decoded;

    // call the next middleware function
    next();
  } catch (error) {
    // pass the error to the error handling middleware
    next(error);
  }
};
