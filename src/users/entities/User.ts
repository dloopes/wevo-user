import { v4 as uuidV4 } from "uuid"
import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("users")
class User {

    @PrimaryColumn()
    id?: string;
    @Column()
    name: string; 
    @Column()
    cpf: number;
    @Column()
    email: string;
    @Column()
    telefone: number;
    @Column()
    sexo: string;
    @Column()
    datanascimento: number;

    constructor() {
        if(!this.id){
            this.id = uuidV4();
        }
    }
    
}

export { User }