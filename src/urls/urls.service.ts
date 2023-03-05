import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url, UrlDocument } from 'schemas/url.schema';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Injectable()
export class UrlsService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  create(createUrlDto: CreateUrlDto) {
    const createdUrl = new this.urlModel(createUrlDto);
    return createdUrl.save();
  }

  findAll() {
    return this.urlModel.find().exec();
  }

  findOne(code: string) {
    return this.urlModel.findOne({ code }).exec();
  }

  update(code: string, updateUrlDto: UpdateUrlDto) {
    return this.urlModel
      .updateOne({ code }, { ...updateUrlDto, updatedAt: new Date() })
      .exec();
  }

  remove(code: string) {
    return this.urlModel.deleteOne({ code }).exec();
  }
}
