import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { randomString } from 'src/utils/randomString';

export type UrlDocument = HydratedDocument<Url>;

@Schema()
export class Url {
  @Prop({
    required: true,
  })
  url: string;

  @Prop({
    required: true,
    unique: true,
    default: randomString,
  })
  code: string;

  @Prop({
    default: Date.now,
  })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
