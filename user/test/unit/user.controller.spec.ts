/* eslint-disable @typescript-eslint/no-empty-function */
import { Test } from '@nestjs/testing';

import { UserController } from '../../src/user.controller';
import { UserService } from '../../src/user.service';

import { createUserDto } from '../mock/create-user-dto';
import { userDocument } from '../mock/user-document';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    userController = moduleRef.get(UserController);
    userService = moduleRef.get(UserService);
  })

  describe('createUser', async () => {
    jest.spyOn(userService, 'create').mockImplementation(async () => userDocument as any);

    await userController.createUser(createUserDto);
  })
});