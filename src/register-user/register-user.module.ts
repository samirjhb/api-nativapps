import { Module } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { RegisterUserController } from './register-user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RegisterUser } from './entities/register-user.entity';

@Module({
  imports: [SequelizeModule.forFeature([RegisterUser])],
  controllers: [RegisterUserController],
  providers: [RegisterUserService]
})
export class RegisterUserModule {}
