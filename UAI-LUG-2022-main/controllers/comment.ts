import { Request, Response } from "express";
import { model } from "mongoose";
import commentModel from "../models/comment";
import blogModel from "../models/blogs";
import { exec } from "child_process";

export const commentController = {
  post: async (request:Request, response:Response) => {
    try {
      const body = request.body //traigo del body
      const comment = new commentModel({...body}) //Creo una instancia del modelo //... Le dan las propiedades a otro ob
      const blog = await blogModel.findById(request.params.id);
      blog?.comments.push(comment.id);
      await comment.save();
      await blog?.save();
      
      response.status(200).send("Todo O.K");
    } catch (error) {
      console.log(`Ha ocurrido un error`);
      console.log(error);
      response.status(500).send("Algo no esta O.K");
    }   
  },

  delete: async (request:Request, response:Response) => {
    try {
      await commentModel.findByIdAndDelete(request.params.id);
      response.status(200).send("Todo O.K");
    } catch (error) {
      
      console.log(`Ha ocurrido un error`);
      response.status(500).send("Algo no esta O.K");
    }
  },

  get: async (request:Request, response:Response) => {
    try {
      const blog = await blogModel.findById(request.params.id).populate("comments");
      response.status(200).send(blog?.comments);

    } catch (error) {
      console.log(`Ha ocurrido un error`);
      console.log(error);
      response.status(500).send("Algo no esta O.K");
    }
  }
};


