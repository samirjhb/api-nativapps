import { Test, TestingModule } from '@nestjs/testing';
import { RegisterUserController } from './register-user.controller';
import { RegisterUserService } from './register-user.service';

describe('RegisterUserController', () => {
  let controller: RegisterUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterUserController],
      providers: [RegisterUserService],
    }).compile();

    controller = module.get<RegisterUserController>(RegisterUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
