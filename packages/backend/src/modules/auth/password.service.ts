import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { bcrypt, bcryptVerify } from 'hash-wasm';

@Injectable()
export class PasswordService {
  constructor(private configService: ConfigService) {}

  async validatePassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    const isValid = await bcryptVerify({
      password,
      hash: hashedPassword,
    });

    return isValid;
  }

  async hashPassword(password: string): Promise<string> {
    const salt = new Uint8Array(16);
    window.crypto.getRandomValues(salt);

    const key = await bcrypt({
      password,
      salt,
      costFactor: 11,
      outputType: 'encoded',
    });

    return key;
  }
}
