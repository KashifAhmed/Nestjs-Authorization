import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User} from './entities/user.entity'
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService{
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    
    async createNewUser(user: any): Promise<User>{
        // TODO: Create and assign interface for user
        
        try{
            const newUser = new this.userModel(user);
            return await newUser.save();
        }catch(error){
            console.log(error);
            return error;
            
        }


    }
}