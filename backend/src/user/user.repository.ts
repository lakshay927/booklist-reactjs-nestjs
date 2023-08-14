// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // ... providers and controllers
})
export class UserModule {}
