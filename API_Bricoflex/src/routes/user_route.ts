import { create, deleteById, getAll, getById, updateById } from "../controllers/user_controller"
import { createUser, deleteUser, updateUser } from "../services/user_service";


const Express = require('express');
const routeruser = Express.Router();

routeruser.get('/', getAll);

routeruser.get('/:id', getById);

routeruser.post('/', createUser);

routeruser.patch('/:id', updateUser);

routeruser.delete('/:id', deleteUser);


export default routeruser;