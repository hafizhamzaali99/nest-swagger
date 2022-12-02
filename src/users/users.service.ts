import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './interfaces/User';

@Injectable()
export class UsersService {
    users : User[] = [{userId:1,name:"Hamza"},{userId:2,name:"Ali"},{userId:3,name:"Hafiz"}]

    findAll(name?:string) : User[] {
        if(name){
            return this.users.filter(user=>user.name.toLocaleLowerCase() === name.toLocaleLowerCase())  //converting both property to lowercase to match the property
        }
        return this.users
    }

    findByID(id:number):User {
        const user =  this.users.find((user:User)=>  {
           return user.userId === id 
        })
        return user
        
    }

    createUser(user:UserDto) : User {
        const userId = this.users.length + 1
        const newUser = {userId,...user}
        this.users.push(newUser)
        return newUser
    }
}
