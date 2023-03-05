import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findOne(@Param('code') code: string) {
    return this.urlsService.findOne(code);
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
