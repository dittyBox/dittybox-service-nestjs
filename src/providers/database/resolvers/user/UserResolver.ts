import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "src/graphql/models/user/User";

@Resolver()
export class UserResolver {

  @Query((returns) => User, {nullable: true})
  getUserById(@Args('id', {type: () => Int}) id: number){
    return 
  }
}
