import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';

@Module({
  imports: [PremierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
