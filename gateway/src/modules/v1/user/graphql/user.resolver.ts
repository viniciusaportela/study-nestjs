import { UseFilters } from "@nestjs/common";
import { ApolloError } from 'apollo-server-express';
import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Roles } from "../../../../@types/roles";
import { GraphQlExceptionFilter } from "../../../../filters/grapql-exception.filter";
import { UserService } from "../user.service";
import { AuthenticationToken, User } from "./user.model";

@Resolver()
export class UserResolver {
  constructor(private userService: UserService){}
  
  @Query(returns => User, { name: 'user' })
  @UseFilters(new GraphQlExceptionFilter())
  async getUser(@Args('_id') _id: string) {
    return this.userService.get(_id);
  }

  @Mutation(returns => User, {name: 'user'})
  async createUser(
    @Args('name') name: string, 
    @Args('password') password: string, 
    @Args('level', { type: () => Roles, defaultValue: Roles.USER }) level: Roles 
  ) {
    return this.userService.create({ name, password, level })
  }

  @Mutation(returns => AuthenticationToken)
  @UseFilters(new GraphQlExceptionFilter())
  async authenticateUser(@Args('name') name: string, @Args('password') password: string) {
    try {
      return { token: await this.userService.authenticate({name, password}).toPromise() };
    } catch (e) {
      throw new ApolloError('Internal Server Error', 'INTERNAL SERVER ERROR')
    }
  }
}