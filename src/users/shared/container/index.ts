import { container } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository"
import { UsersRepository } from "../../repositories/implementations/UsersRepository";

//IUserRepository
container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)