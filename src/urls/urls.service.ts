import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Injectable()
export class UrlsService {
  create(createUrlDto: CreateUrlDto) {
    return 'This action adds a new url';
  }

  findAll() {
    return `This action returns all urls`;
  }

  findOne(code: string) {
    return `This action returns a url by code: ${code}`;
  }

  update(code: string, updateUrlDto: UpdateUrlDto) {
    return `This action updates a url by code: ${code}`;
  }

  remove(code: string) {
    return `This action removes a url ${code}`;
  }
}
