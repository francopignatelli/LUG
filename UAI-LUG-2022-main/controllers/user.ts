import { Request, Response } from "express";
import { model } from "mongoose";
import userModel from "../models/users";

export const userController = {
  post: async (request:Request, response:Response) => {
    try {
      const body = request.body //traigo del body
      const model = new userModel({...body}) //Creo una instancia del modelo //... Le dan las propiedades a otro obj
      await model.save();
      response.status(200).send("Todo O.K");
    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }   
  },

  delete: async (request:Request, response:Response) => {
    try {
      await userModel.findOneAndDelete({username: request.params.username});
      response.status(200).send("Todo O.K");
    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }   
  },

  get: async (request:Request, response:Response) => {
    try {
      let answer;
      if (request.params.username) {
        answer = await userModel.find({username: request.params.username});
      }else{
        answer = await userModel.find();
      }
      response.status(200).send(answer);

    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }   
  },

  put: async (request:Request, response:Response) => {
    try {
      await userModel.findOneAndUpdate({username: request.params.username}, {...request.body});
      response.status(200).send("Todo O.K");
    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }
  },
};


