import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UrlsService } from './urls.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Controller('urls')
export class UrlsController {
  constructor(private readonly urlsService: UrlsService) {}

  @Post()
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlsService.create(createUrlDto);
  }

  @Get()
  findAll() {
    return this.urlsService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string) {
    const foundCode = await this.urlsService.findOne(code);
    if (!foundCode) {
      throw new HttpException('Code Not Found', HttpStatus.NOT_FOUND);
    }
    return foundCode;
  }

  @Patch(':code')
  update(@Param('code') code: string, @Body() updateUrlDto: UpdateUrlDto) {
    return this.urlsService.update(code, updateUrlDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.urlsService.remove(code);
  }
}
