import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { Url, UrlSchema } from 'schemas/url.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Url.name, schema: UrlSchema }])],
  controllers: [UrlsController],
  providers: [UrlsService],
})
export class UrlsModule {}
