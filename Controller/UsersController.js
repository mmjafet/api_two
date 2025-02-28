const { getAllUsers, login, createUser, getUserById, getUserByName, deleteUser, updateUser } = require("../Service/authService");

const getUsers = async (req, res) => {
    const users = await getAllUsers();
    if (users) {
        res.status(200).json(users);
    } else {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
}

const createUserController = async (req, res) => {
    const { username, password } = req.body;
    const newUser = await createUser(username, password);
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
}

const loginController = async (req, res) => {
    const { username, password } = req.body;
    const respuesta = await login(username, password);
    const { token } = respuesta;
    const { message } = respuesta;

    if (token) {
        res.json({ token });
    } else {
        res.status(401).json({ message });
    }
}

const getUserByIdController = async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

const getUserByNameController = async (req, res) => {
    const { username } = req.params;
    const user = await getUserByName(username);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
}

const deleteUserController = async (req, res) => {
    const { id } = req.params;
    const result = await deleteUser(id);
    if (result) {
        res.status(200).json({ message: 'Usuario eliminado' });
    } else {
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
}

const updateUserController = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await updateUser(id, updateData);
    if (updatedUser) {
        res.status(200).json(updatedUser);
    } else {
        res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
}

module.exports = {
    getUsers,
    createUserController,
    loginController,
    getUserByIdController,
    getUserByNameController,
    deleteUserController,
    updateUserController
}