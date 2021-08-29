import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest { 
    name: string;
    cpf: number;
    email: string;
    telefone: number;
    sexo: string;
    datanascimento: number;  
}

@injectable()
class CreateUserUseCase {
    constructor(

        @inject("UsersRepository")  
        public usersRepository: IUsersRepository){}

   async execute({name, cpf, email, telefone, sexo, datanascimento}: IRequest): Promise<void> {
        const nameAlredyExists =  await this.usersRepository.findByName(name);

        if (nameAlredyExists){
            throw new Error("Name already Exists!");
        }
       
        this.usersRepository.create({ name, cpf, email, telefone, sexo, datanascimento });
   
    }

}

export { CreateUserUseCase }