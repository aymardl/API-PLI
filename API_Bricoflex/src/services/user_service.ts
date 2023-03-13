import User from "../database/model/user";
import {Request, Response} from "express";

//fonction qui crée un user//
export async function createUser(req: Request, res: Response) {
    if (req.body === null) {
        res.sendStatus(400);
      } 
      else {
        const newressource = await User.create({
          Nom: req.body.Nom,
          Prénom: req.body.Prénom,
          Mail: req.body.Mail,
          Telephonenumber: req.body.Telephonenumber,
          Password: req.body.Password,
          Compétences: req.body.Compétences,
          Description: req.body.Description,
      });
        res.send(newressource);
    };
};

//fonction qui update un user//
export async function updateUser(req: Request, res: Response) {
    const Test =  await User.findOne({where: {id : req.params.id}});
    if (Test === null) {
        res.sendStatus(404);
    }
    else {
        const updateressource =  await Test.update({
            Nom: req.body.Name,
            Prénom: req.body.Lastname,
            Mail: req.body.Mail,
            Telephonenumber: req.body.Telephonenumber,
            Password: req.body.Password,
            Compétences: req.body.Compétences,
            Description: req.body.Description,
        });
        res.send(updateressource);  
    };
};

//fonction qui supprime un user//
export async function deleteUser(req: Request, res: Response) {
    const Test =  await User.findOne({where: {id : req.params.id}});
    if (Test === null) {
      res.sendStatus(404);
    }
    else {
      const deleteressource = await Test.destroy({
        Nom: req.body.Name,
        Prénom: req.body.Lastname,
        Mail: req.body.Mail,
        Telephonenumber: req.body.Telephonenumber,
        Password: req.body.Password,
        Compétences: req.body.Compétences,
        Description: req.body.Description,
      });
      res.send(deleteressource);
    };
};
