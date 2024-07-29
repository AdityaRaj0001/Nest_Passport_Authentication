import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';


const fakeUsers=[
    {
        id:1,
        username:'anson',
        password:'secret'
    },
    {
        id:2,
        username:'anson2',
        password:'secret2'
    },
]
@Injectable()
export class AuthService {
    constructor(private jwtService:JwtService){}


    validateUser({username,password}:AuthPayloadDto){
        const findUser=fakeUsers.find((u)=>u.username===username)
        if(!findUser)return null;
        if(password===findUser.password){
            const {password,...user}=findUser
            return this.jwtService.sign(user)
        }
    }
}
