import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModuleModule } from './user-module/user-module.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModuleModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
