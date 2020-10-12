import { Field, ObjectType, registerEnumType } from "@nestjs/graphql";
import { Roles } from "../../../@types/roles";

registerEnumType(Roles, { name: 'Roles' })

@ObjectType()
export class User {
  @Field(type => String)
  _id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  password: string;

  @Field(type => Roles)
  level: Roles;
}

@ObjectType()
export class AuthenticationToken {
  @Field(type => String, {nullable: true})
  token: string;
}