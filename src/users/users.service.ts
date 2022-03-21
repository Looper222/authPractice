import { Injectable } from '@nestjs/common';
import { User } from './models/User';

@Injectable()
export class UsersService {
    private users: User[] = [];

    public getUser(getUserArgs: GetUserArgs): User {
        return this.users.find(user => user.id === getUserArgs.userId);
    }
}
