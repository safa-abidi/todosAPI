import { Injectable } from '@nestjs/common';
import { PubSearchDto } from './pub-search-dto';
import { Publication } from './publication';

@Injectable()
export class PublicationService {
  private pubs: Publication[] = [
    {
      title: 'note',
      description: 'desc 1',
    },
    {
      title: 'title 2',
      description: 'desc 2',
    },
  ];

  getPubs(): Publication[] {
    return this.pubs;
  }

  getPubsSearched(pubsSearchDto: PubSearchDto): Publication[] {
    const { search } = pubsSearchDto;
    let pubs = this.getPubs();
    if (search) {
      pubs = pubs.filter(
        (pub) => pub.title.includes(search) || pub.description.includes(search),
      );
    }
    return pubs;
  }
}
