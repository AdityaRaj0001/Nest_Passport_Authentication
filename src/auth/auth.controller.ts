import {
  Body,
  Controller,
  HttpException,
  Post,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { JWTAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  login(@Req() req:Request) {
    return req.user
  }

  @Get('status')
  @UseGuards(JWTAuthGuard)
  status(@Req() req: Request) {
    console.log('Inside authcontroller status method');
    return req.user
  }
}
