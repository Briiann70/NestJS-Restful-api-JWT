//auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string): Promise<any> {
    const payload = { username, sub: 1 }; // Contoh payload
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
