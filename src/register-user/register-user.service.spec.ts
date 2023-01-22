import { Test, TestingModule } from '@nestjs/testing';
import { RegisterUserService } from './register-user.service';

describe('RegisterUserService', () => {
  let service: RegisterUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterUserService],
    }).compile();

    service = module.get<RegisterUserService>(RegisterUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
