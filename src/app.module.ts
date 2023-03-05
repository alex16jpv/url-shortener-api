import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlsModule } from './urls/urls.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from './utils/constants';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UrlsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
