import { Module } from '@nestjs/common';
import { PubDbController } from './pub-db.controller';
import { PubDbService } from './pub-db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PublicationSchema } from './publication';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Publication', schema: PublicationSchema },
    ]),
  ],
  controllers: [PubDbController],
  providers: [PubDbService],
})
export class PubDbModule {}
