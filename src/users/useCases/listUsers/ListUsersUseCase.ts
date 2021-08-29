import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class ListUsersUseCase {
 
   constructor(
    @inject("UsersRepository")   
    private usersRepository: IUsersRepository){}

   async execute(): Promise<void> {
        const users = await this.usersRepository.list();
   
    }
}

export { ListUsersUseCase }