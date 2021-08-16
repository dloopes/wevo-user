import { Response, Request } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {

    constructor(private listUsersUseCase: ListUsersUseCase){}

    async handle(request: Request, response: Response): Promise<Response> {
    const all = this.listUsersUseCase.execute();
     return response.json(all);
    }
}

export { ListUsersController }