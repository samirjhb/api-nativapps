import { Injectable } from '@nestjs/common';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { RegisterUser } from './entities/register-user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectModel(RegisterUser)
    private registerUser: typeof RegisterUser,
  ) {}

  //Servicio para la creacion de paciente
  async create(
    createRegisterUserDto: CreateRegisterUserDto,
  ): Promise<RegisterUser> {
    try {
      return await this.registerUser.create<RegisterUser>(
        createRegisterUserDto,
      );
    } catch (error) {
      return error;
    }
  }

  //Servicio para obtener los paciente
  async findAll(): Promise<RegisterUser[]> {
    return await this.registerUser.findAll<RegisterUser>();
  }

  //Servicio para obtener paciente por id
  async findOne(id: number): Promise<RegisterUser> {
    return await this.registerUser.findOne({
      where: {
        id,
      },
    });
  }

  //Servicio para actualizar paciente
  async update(id: number, updateRegisterUserDto: UpdateRegisterUserDto) {
    try {
      await this.registerUser.update(updateRegisterUserDto, { where: { id } });
      return `Paciente con el id  #${id} fue actualizado`;
    } catch (error) {
      return `Paciente con el id  #${id} no se pudo actualizar`;
    }
  }

  //Servicio para eliminar paciente
  async remove(id: number) {
    try {
      await this.registerUser.destroy({ where: { id } });
      return `Paciente con el id  #${id} fue eliminado`;
    } catch (error) {
      return `Paciente con el id  #${id} no se pudo eliminar`;
    }
  }
}
