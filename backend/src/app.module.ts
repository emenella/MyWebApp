import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AccesGuard } from './auth/guard/acces.guard';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './ormconfig';


@Module({
  imports: [UserModule, AuthModule, TypeOrmModule.forRoot(typeOrmConfig)],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccesGuard,
    }
  ],
})
export class AppModule {}
