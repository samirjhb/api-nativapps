import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumberString, MaxLength, MinLength } from 'class-validator';
export class CreateRegisterUserDto {
  @ApiProperty()
  @MinLength(0)
  @MaxLength(20)
  @IsNumberString()
  IdNumber: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  @IsEmail()
  Email: string;

  @ApiProperty()
  @MinLength(0)
  @MaxLength(20)
  @IsNumberString()
  Phone: string;
}
