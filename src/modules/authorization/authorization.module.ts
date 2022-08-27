import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

import { AuthorizationController } from './authorization.controller';
import { User, UserSchema } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';



const UserModel = {
    provide: getModelToken(User.name),
    useValue: UserSchema
}
@Module({
    imports: [],
    controllers: [AuthorizationController],
    providers: [
        UserService,
        UserModel
    ],
})
export class AuthorizationModule { }