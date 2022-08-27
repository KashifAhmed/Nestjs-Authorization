import { Model } from 'mongoose';

import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class UserService{
    constructor(@Inject('USER_MODEL') private userModel: Model<any>){}

    
    async createNewUser(user: any): Promise<any>{
        // TODO: Create and assign interface for user
        
        try{
            debugger
            const newUser = new this.userModel(user);
            return newUser.save();
        }catch(error){
            return error;
            
        }


    }
}