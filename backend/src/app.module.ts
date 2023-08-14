import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EntityModule } from './entity/entity.module';
import { ServiceModule } from './service/service.module';
import { ControllerModule } from './controller/controller.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EntityModule,
    ServiceModule,
    ControllerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass',
      database: 'booklist',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
