const express = require("express");

// Import Controllers
const UserController = require("../controllers/UserController");

const router = express.Router();

// Routers
router.get("/read", UserController.getUsers);
router.post("/create", UserController.createUsers);
router.get("/read/:id", UserController.readUsers);

module.exports = router;
