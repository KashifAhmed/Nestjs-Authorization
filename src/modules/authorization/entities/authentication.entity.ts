

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { User } from '../../user/entities/user.entity';
@Schema()
export class Authentication extends Document {
    @Prop({ type: MongooseSchema.Types.ObjectId })
    user_id: MongooseSchema.Types.ObjectId;

    @Prop({ default: Date.now })
    updatedAt: Date;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ required: true })
    password: string
    
}

export const AuthenticationSchema = SchemaFactory.createForClass(Authentication);