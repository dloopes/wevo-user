import { User } from "../entities/User"

interface ICreateUserDTO {
    name: string;
    cpf: number;
    email: string;
    telefone: number;
    sexo: string;
    datanascimento: number;  
}

interface IUsersRepository {
    findByName(name: string): Promise<User>;
    list(): Promise<User[]>;
    create({name, cpf, email, telefone, sexo, datanascimento}: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };