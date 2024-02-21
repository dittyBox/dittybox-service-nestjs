import { Query, Resolver } from "@nestjs/graphql";
import { User } from "src/graphql/models/user/User";

@Resolver()
export class UserResolver {

  @Query((returns) => User)
  getUser(){
    return {
      id: 1,
      username: 'test',
      displayname: 'test1',
    }
  }
}
