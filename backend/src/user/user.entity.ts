import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    username : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column({ nullable: true })
    refresh_token : string;

    constructor(username: string, email: string, password: string) {

        this.username = username;
        this.email = email;
        this.password = password;
    }
}