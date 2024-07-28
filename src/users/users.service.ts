import { Injectable } from '@nestjs/common';

export type User={
    id:number;
    name:string;
    username:string;
    password:string;
}

@Injectable()
export class UsersService {
    private readonly users:User[]=[
        {
            id: 1,
            name: "Alice Johnson",
            username: "alicej",
            password: "alice1234"
          },
          {
            id: 2,
            name: "Bob Smith",
            username: "bobsmith",
            password: "bobpassword"
          },
          {
            id: 3,
            name: "Charlie Brown",
            username: "charlieb",
            password: "charlie2024"
          },
          {
            id: 4,
            name: "Dana White",
            username: "dwhite",
            password: "danaPass!"
          }
    ]

    async findOne(username:string):Promise<User | undefined> {
        return this.users.find((u)=>u.username===username)
    }
        
    
}
