import { Controller, Get, Query } from '@nestjs/common';
import { PubSearchDto } from './pub-search-dto';
import { Publication } from './publication';
import { PublicationService } from './publication.service';

@Controller('api/publication')
export class PublicationController {
  constructor(private pubsService: PublicationService) {}

  @Get('')
  getPubs(@Query() searchDto: PubSearchDto): Publication[] {
    if (Object.keys(searchDto).length) {
      return this.pubsService.getPubsSearched(searchDto);
    } else {
      return this.pubsService.getPubs();
    }
  }
}
