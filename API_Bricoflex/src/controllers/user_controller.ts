import User from "../database/model/user";
import {Request, Response} from "express";

//fonction permettant de récupérer toutes les users//
export async function getAll(req: Request,res: Response) {
  const find = await User.findAll();
    res.send(JSON.stringify(find));
};

//fonction permettant de récupérer un user selon son Id//
export async function getById(req: Request, res: Response) {
  const user =  await User.findOne({where: {id : req.params.id}})
    if (user === null) {
      res.sendStatus(404);
    } 
    else {
      res.send(JSON.stringify(user));
    };
};

//fonction permettant de crée un user via une autre fonction importer des services//
export function create(req: Request, res: Response) {
  async function createUser(req: Request, res: Response) {
    try {
      res.send(create);
    }
    catch {
      res.sendStatus(400);
    };
  };
};
   
//fonction permettant de update un user selon son Id via une autre fonction importé des services//
export function updateById(req: Request, res: Response) {
  async function updateUser(req: Request, res: Response) {
    try {
      res.send(updateById);
    }
    catch {
      res.sendStatus(404);
    };
  };
};

//fonction permettant de supprimer un user selon son Id via une autre fonction importé des services//
export function deleteById(req: Request, res: Response) {
  async function deleteUser(req: Request, res: Response) {
    try {
      res.send(deleteById);
    }
    catch {
      res.sendStatus(404);
    };
  };
};

//fonction similaire a la fonction create//
export async function register(req: Request, res: Response) {
    if (req.body === null) {
      res.send("not found");
    } 
    else {
      const addproduct = await User.create({
        Iduser: req.body.Id,
        Name: req.body.Name,
        Password: req.body.Password,
        Lastname: req.body.Lastname,
        Mail: req.body.Mail,
        Telephonenumber: req.body.Telephonenumber
    });
    res.send(addproduct);
  };
};