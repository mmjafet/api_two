const router = require("express").Router();
const {getUsers,
    createUserController,
    loginController,
    getUserByIdController,
    getUserByNameController,
    deleteUserController,
    updateUserController} = require("../Controller/UsersController");



module.exports = router;