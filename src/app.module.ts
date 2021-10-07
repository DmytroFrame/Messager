import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    MessagesModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
