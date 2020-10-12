import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Roles, RolesStringArray } from '../@types/roles';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop()
  name: string;

  @Prop()
  password: string;

  @Prop({
    type: 'String',
    enum: RolesStringArray,
    default: 'user',
  })
  level: Roles;
}

export const UserSchema = SchemaFactory.createForClass(User);
