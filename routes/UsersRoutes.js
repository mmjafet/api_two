const router = require("express").Router();
const {getUsers,
    createUserController,
    loginController,
    getUserByIdController,
    getUserByNameController,
    deleteUserController,
    updateUserController} = require("../Controller/UsersController");

router.get("/users",getUsers);
router.post("/users",createUserController);
router.post("/login",loginController);
router.get("/users/:id",getUserByIdController);
router.get("/users/name/:username",getUserByNameController);
router.delete("/users/:id",deleteUserController);
router.put("/users/:id",updateUserController);

module.exports = router;
