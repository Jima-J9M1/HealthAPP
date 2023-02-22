// Import required modules
require("dotenv").config(); // Load environment variables
const jwt = require("jsonwebtoken"); // JWT for token verification
const User = require("../models/User"); // User model

// Middleware function for creating context
const createContextMiddleware = (req, res, next) => {
  // Create a req.context object to store models for use in all routes
  req.context = {
    models: {
      userModel: User
    },
  };
  next();
};

// Middleware function for authorization (ensuring user is logged in)
const isLoggedInMiddleware = async (req, res, next) => {
  try {
    // Check if authorization header exists
    if (req.headers.authorization) {
      // Parse token from authorization header
      const token = req.headers.authorization.split(" ")[1]; // Get token from the header
      if (token) {
        // Verify token using the secret key
        const payload = await jwt.verify(token, process.env.SECRET);
        if (payload) {
          // Store user data in the request object
          req.user = payload;
          next();
        } else {
          res.status(400).json({ error: "Token verification failed" });
        }
      } else {
        res.status(400).json({ error: "Malformed authorization header" });
      }
    } else {
      res.status(400).json({ error: "No authorization header" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

// Export custom middleware functions
module.exports = {
  createContext: createContextMiddleware,
  isLoggedIn: isLoggedInMiddleware,
};
