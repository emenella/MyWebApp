import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "./user.entity";

@Injectable()
export class UserService {
    
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
    
    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }
    
    async findById(id: number): Promise<User | undefined> {
        return this.userRepository.findOneBy({ id: id });
    }
    async findByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ username: username });
    }
    
    async findByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.findOneBy({ email: email });
    }
    
    async create(user: User): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
    
    async update(id: number, updateUser: Partial<User>): Promise<User | undefined> {
        await this.userRepository.update(id, updateUser);
        return this.userRepository.findOneBy({ id: id });
    }
    
    async delete(id: number): Promise<boolean> {
        const deleteResult = await this.userRepository.delete(id);
        return deleteResult.affected > 0;
    }
}