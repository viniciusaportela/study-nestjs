import { UseFilters } from "@nestjs/common";
import { ApolloError, AuthenticationError } from 'apollo-server-express';
import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Roles } from "../../../../@types/roles";
import { GraphQlExceptionFilter } from "../../../../filters/graphql-exception.filter";
import { UserService } from "../user.service";
import { AuthenticationToken, User } from "./user.model";

@Resolver()
@UseFilters(new GraphQlExceptionFilter())
export class UserResolver {
  constructor(private userService: UserService){}
  
  @Query(returns => User, { name: 'user' })
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
      if (e.error.status === 401) {
        throw new AuthenticationError('wrong credentials')
      } else if (e.error.status === 404) {
        throw new ApolloError('Not Found', 'NOT FOUND')
      } else {
        throw new ApolloError('Internal Server Error', 'INTERNAL SERVER ERROR')
      }
    }
  }
}