import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsNotEmpty()
  first_name: string;
  last_name: string;
  password: string;
  
  @IsEmail()
  email: string;
  
}