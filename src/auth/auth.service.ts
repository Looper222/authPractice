import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/models/User';
import { UsersService } from '../users/users.service';


@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly JwtService: JwtService
        ) {}

        async validate(login: string, password: string): User | null {
            const user = this.usersService.getUser(login);
        }
}
