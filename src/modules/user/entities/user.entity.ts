import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class User extends Document {
    @Prop({ required: true, unique: true, message: 'Your email already exist' })
    email: string;

    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ default: Date.now })
    updatedAt: Date;

    @Prop({ default: Date.now })
    createdAt: Date;

}
export const UserSchema = SchemaFactory.createForClass(User);