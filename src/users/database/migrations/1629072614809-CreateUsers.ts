import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1629072614809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [{
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                       },
                       {
                           name: "cpf",
                           type: "varchar",
                       },
                       {
                           name: "email",
                           type: "varchar",
                       },
                       {
                           name: "telefone",
                           type: "varchar",
                       },
                       {
                           name: "sexo",
                           type: "varchar",
                       },
                       {
                           name: "datanascimento",
                           type: "number"
                       }
                ]
            }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
