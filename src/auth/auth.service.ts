import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ){}

  async signIn(
    id: string,
    pw: string
  ): Promise<{access_token: string}>{
    const user = {};
    // if(user?.pw !== pass){
    //   throw new UnauthorizedException();
    // }
    const payload = {id: "", displayname: ""};
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
