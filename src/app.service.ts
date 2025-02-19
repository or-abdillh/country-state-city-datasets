import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is the service part of Hulu Target platform. The service only handles getting country, state, and city datasets.'
  }
}
