import { Controller, Post, Body, Get } from '@nestjs/common';
import { Request } from 'express';

import { RegisterUserDto } from './authorization.dto';

import { UserService } from '../user/user.service';
import { AuthorizationService } from './authorization.service';


@Controller('')
export class AuthorizationController {

  constructor(private authenticationService: AuthorizationService, private userService: UserService){}

  @Post('register')
  async register(@Body() newUserDto: RegisterUserDto): Promise<string> {
    console.log('--------',newUserDto) 
    // First create new user
    let newUser = await this.userService.createNewUser(newUserDto);
    if(newUser){

      console.log("New user has been register", newUser)
    }

    let newUserAuth = await this.authenticationService.registerUser(newUser._id, newUserDto.password)
    
    // Create user for authentication (i.e: username & password)
    
    return 'This action returns all cats';
  }


  @Post('login')
  login(){

    // Step 1: Check email & password
    // Step 2: Create Session
    
    return 'You are successfully loggedIn'
  }

  @Get('authorize')
  checkAuthorize(){
    // Step 1: Check the old token is valid or not
    // Step 2: If valid then expire it
    // Step 3: Send new token 
    return 'You are authorize for access this service '
  }
}