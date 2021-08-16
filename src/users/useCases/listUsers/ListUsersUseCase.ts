import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class ListUsersUseCase {
 
   constructor(private usersRepository: IUsersRepository){}

   async execute(): Promise<void> {
        const users = await this.usersRepository.list();
   
    }

}

export { ListUsersUseCase }