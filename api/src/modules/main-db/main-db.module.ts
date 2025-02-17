import { join } from 'node:path/posix';

import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { memoize } from 'lodash';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { getConfig } from '@config/config';
import { NodeEnv } from '@config/env';

export const createDbConfig = memoize((isLocal = false) => {
  const { dbHost, dbPort, postgresDb, dbAppUserName, dbAppUserPassword } = getConfig();

  return {
    type: 'postgres',
    host: isLocal ? 'localhost' : dbHost,
    port: dbPort,
    database: postgresDb,
    username: dbAppUserName,
    password: dbAppUserPassword,
    namingStrategy: new SnakeNamingStrategy(),
    synchronize: getConfig().nodeEnv === NodeEnv.Dev,
    entities: [join(process.cwd(), 'dist', '**', '*.entity.js')],
    migrations: [join(process.cwd(), 'dist', '**', 'main-db', 'migrations', '*.js')],
  } satisfies TypeOrmModuleOptions;
});

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: createDbConfig,
    }),
  ],
})
export class MainDbModule {}
