import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @IsNotEmpty() 
  @ApiProperty() first_name: string;
  @ApiProperty() last_name: string;
  @ApiProperty() password: string;
  
  @IsEmail() 
  @ApiProperty() email: string;
  
}