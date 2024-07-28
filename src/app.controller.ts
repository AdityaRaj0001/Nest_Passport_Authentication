import { Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticationGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('Login')
  login(@Request() req):any{
    return {msg:'Logged in bruhhh'}
  }
  @UseGuards(AuthenticationGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user
  }
}
