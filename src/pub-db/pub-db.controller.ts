import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PubDbService } from 'src/pub-db/pub-db.service';
import { Publication } from 'src/publication/publication';
import { SearchDto } from './search-dto';

@Controller('api/pubDB')
export class PubDbController {
  constructor(private readonly publicationService: PubDbService) {}

  @Post()
  async addPub(@Body('title') pubId: string, @Body('desc') prodDesc: string) {
    const generatedId = await this.publicationService.insertPublication(
      pubId,
      prodDesc,
    );
    return { id: generatedId };
  }

  @Get()
  async getSearch(@Query() searchDto: SearchDto) {
    let pubs = [];
    if (Object.keys(searchDto).length) {
      pubs = await this.publicationService.getPubsSearched(searchDto);
    } else {
      pubs = await this.publicationService.getPubs();
    }
    console.log(pubs);
    return pubs as Publication[];
  }

  //@Get()
  //async getAllPubs() {
  //const pubs = await this.publicationService.getPubs();
  //return pubs as Publication[];
  //}
}
