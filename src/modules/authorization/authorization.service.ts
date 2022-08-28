import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Authentication, AuthenticationSchema } from './entities/authentication.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorizationService {
    constructor(@InjectModel(Authentication.name) private AuthenticationModel: Model<Authentication>){}

    async registerUser(user_id: string, password: string){
        // Before save of user must encrypt the password with encrypt strategy

        const newUserAuthDetails = new this.AuthenticationModel({
            user_id: user_id,
            password: password
        });

        return await newUserAuthDetails.save();
    }
}