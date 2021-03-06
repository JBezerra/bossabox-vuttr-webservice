import { container } from 'tsyringe';

import '@modules/users/providers/';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ToolsRepository from '@modules/tools/infra/typeorm/repositories/ToolsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
