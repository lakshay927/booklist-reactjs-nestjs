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
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        const requiredEnvVars = [
          'DB_HOST',
          'DB_PORT',
          'DB_USERNAME',
          'DB_PASSWORD',
          'DB_DATABASE',
        ];
        for (const envVar of requiredEnvVars) {
          if (!process.env[envVar]) {
            throw new Error(
              `${envVar} is not defined in the environment variables.`,
            );
          }
        }
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: +process.env.DB_PORT,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
