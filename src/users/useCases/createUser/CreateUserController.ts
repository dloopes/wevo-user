import { Response, Request } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email, telefone, sexo, datanascimento } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase); 

    await createUserUseCase.execute({ name, cpf, email, telefone, sexo, datanascimento})    
     
        return response.status(201).send();
    }
}

export { CreateUserController }