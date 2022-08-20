import { Module } from '@nestjs/common';
import { AppController } from './app.controller';


import { AppService } from './app.service';
import { AuthorizationController } from './modules/authorization/authorization.controller';


@Module({
  imports: [],
  controllers: [AppController, AuthorizationController],
  providers: [AppService],
})
export class AppModule {}
