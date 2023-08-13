import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityModule } from './entity/entity.module';
import { ServiceModule } from './service/service.module';
import { ControllerModule } from './controller/controller.module';

@Module({
  imports: [EntityModule, ServiceModule, ControllerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
