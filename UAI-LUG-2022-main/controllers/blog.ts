import { Request, Response } from "express";
import { model } from "mongoose";
import blogModel from "../models/blogs";

export const blogController = {
  post: async (request:Request, response:Response) => {
    try {
      const body = request.body //traigo del body
      const model = new blogModel({...body}) //Creo una instancia del modelo //... Le dan las propiedades a otro obj
      await model.save();
      response.status(200).send("Todo O.K");
    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }   
  },

  delete: async (request:Request, response:Response) => {
    try {
      await blogModel.findByIdAndDelete(request.params.id);
      response.status(200).send("Todo O.K");
    } catch (error) {
      
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }
  },

  get: async (request:Request, response:Response) => {
    try {
      let answer;
      if (request.params.id) {
        answer = await blogModel.findById(request.params.id);
      }else{
        answer = await blogModel.find();
      }
      response.status(200).send(answer);

    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }
  },

  put: async (request:Request, response:Response) => {
    try {
      await blogModel.findByIdAndUpdate(request.params.id, {...request.body});
      response.status(200).send("Todo O.K");
    } catch (error) {
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }
  },
};


