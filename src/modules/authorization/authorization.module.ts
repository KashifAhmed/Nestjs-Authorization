import { Module } from '@nestjs/common';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';

import { AuthorizationController } from './authorization.controller';
import { User, UserSchema } from '../user/entities/user.entity';
import { Authentication, AuthenticationSchema} from './entities/authentication.entity';
import { UserService } from '../user/user.service';
import { AuthorizationService } from './authorization.service';




@Module({
    imports: [
        MongooseModule.forFeature([{ name: Authentication.name, schema: AuthenticationSchema }]),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [AuthorizationController],
    providers: [
        UserService,
        AuthorizationService
    ]    
})
export class AuthorizationModule { }