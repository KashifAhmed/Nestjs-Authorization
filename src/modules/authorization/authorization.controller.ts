import { Controller, Post, Body } from '@nestjs/common';
import { Request } from 'express';

import { RegisterUserDto } from './authorization.dto';


@Controller('register')
export class AuthorizationController {

  constructor(){}

  @Post()
  create(@Body() newUserDto: RegisterUserDto): string {
    console.log(newUserDto)
    return 'This action returns all cats';
  }
}