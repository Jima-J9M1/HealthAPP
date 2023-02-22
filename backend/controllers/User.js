require("dotenv").config(); // Load environment variables
const { Router } = require("express"); // Import router from Express
const bcrypt = require("bcryptjs"); // Import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // Import JWT to sign tokens

const router = Router(); // Create router to bundle routes
const User = require("../models/User")


// Destructure environment variables with defaults
const { JWT_SECRET = "secret" } = process.env;

// Route to create a new user
router.post("/signup", async (req, res) => {

  try {
    console.log(req.body)
    // Hash the password before saving it
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // Create a new user
    const user = await User.create(req.body);
    // Send new user as response
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to verify a user and get a token
router.post("/login", async (req, res) => {

  try {
    // Check if the user exists
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      // Check if the password matches
      const passwordMatches = await bcrypt.compare(req.body.password, user.password);
      if (passwordMatches) {
        // Sign a JWT token and send it in the response
        const token = jwt.sign({ username: user.username }, JWT_SECRET);
        res.json({ token });
      } else {
        res.status(400).json({ error: "Incorrect password" });
      }
    } else {
      res.status(400).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;