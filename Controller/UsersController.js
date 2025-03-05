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
    console.log(newUser);
    console.log(username, password);
    console.log(req.body);
    const { login, signup } = require("../Service/authService");

    const loginController = async (req, res) => {
        const { username, password } = req.body;
        //console.log(username, password);
        try {
            const respuesta = await login(username, password);
            
            if (respuesta.status === 200) {
                res.status(respuesta.status).json(respuesta);
            } else {
                res.status(500).json({ message: "Error interno del servidor 2892198" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    const signupController = async (req, res) => {
        const { username, password } = req.body;
        console.log(username
            , password
        );
        try {
            const respuesta = await signup(username, password);
            //console.log(respuesta);
            if (respuesta.status === 201) {
                console.log(respuesta);
                res.status(respuesta.status).json(respuesta);
            } else {
                res.status(500).json({ message: "Error interno del servidor23" });
               
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    
    module.exports = {
        loginController,
        signupController
    };
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

module.exports = {
    getUsers,
    createUserController,
    loginController,
    getUserByIdController,
    getUserByNameController,
    deleteUserController,
    updateUserController
}