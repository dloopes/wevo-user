import {  Router } from "express";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { CreateUserController } from "../useCases/createUser/CreateUserController";
import { ListUsersController } from "../useCases/listUsers/ListUsersController";

const usersRoutes = Router();

const usersRepository = new UsersRepository();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", (request, response) => {
    return listUsersController.handle(request, response);
});

export { usersRoutes };