import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Registro de Paciente')
@Controller('register-user')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createRegisterUserDto: CreateRegisterUserDto) {
    return this.registerUserService.create(createRegisterUserDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.registerUserService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.registerUserService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(
    @Param('id') id: string,
    @Body() updateRegisterUserDto: UpdateRegisterUserDto,
  ) {
    return this.registerUserService.update(+id, updateRegisterUserDto);
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id') id: number) {
    return this.registerUserService.remove(id);
  }
}
