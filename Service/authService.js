const {users} = require("../data/users.js");
const User = require("../Models/userModel");

//Funcion para la primer ruta

//get --> /get-users
const getAllUsers = async () =>{
    try {
        const users = await User.find();
    } catch (error) {
        console.error(error);
        return null;
    }
    return users;
}

//get -->login
const login =(user, pass) =>{
    //COLOCAR BIEN EL TOKEN token-falso-1
    var token = "token-falso-";
    //const validate= getUserByNameAndPass(user, pass)
    //console.log(validate);
    // Validar usuario
    //if (validate){
    if (getUserByNameAndPass(user, pass)){
       token += getUserByNameAndPass(user, pass).id;
        return {token};
    }
    return {message: "usuario o contraseña incorrectos"};
}

const createUser = async (username, password) =>{
try { 
    const newUser = new User({username, password}); 
    const saveUser = await newUser.save();
    return saveUser;
} catch (error) {
    return null;
}

}

const getUserByNameAndPass = async (user, pass) =>{
    try {
        const user= User.finOne({username, password});
        return user;
        
    } catch (error) {
        return null;
}}


module.exports= {getAllUsers, createUser ,login}