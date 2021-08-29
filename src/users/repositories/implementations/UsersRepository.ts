import { User } from "../../entities/User"
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";
import { getRepository, Repository } from "typeorm"

class UsersRepository implements IUsersRepository {

    private repository: Repository<User>;
    
    constructor(){
        this.repository = getRepository(User);
    }

    async create({ name, cpf, email, telefone, sexo, datanascimento} : ICreateUserDTO): Promise<void> { 
       
       const user = this.repository.create({
           name, 
           cpf,
           email,
           telefone,
           sexo,
           datanascimento,
       })

       await this.repository.save(user)
    }

    async list(): Promise<User[]>{
        const users = await this.repository.find()
        return users;  
    }

    async findByName(name: string): Promise<User> {
         const user = await this.repository.findOne({ name })
         return user;
    }
}

export { UsersRepository }