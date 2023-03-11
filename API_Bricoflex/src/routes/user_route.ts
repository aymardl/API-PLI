import { create, deleteById, getAll, getById, updateById } from "../controllers/user_controller"


const Express = require('express');
const routeruser = Express.Router();

routeruser.get('/', getAll);

routeruser.get('/:id', getById);

routeruser.post('/', create);

routeruser.patch('/:id', updateById);

routeruser.delete('/:id', deleteById);


export default routeruser;