import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pg',
      // host: 'localhost',
      port:5432,
      username: 'postgres',
      password: '123456',
      database: 'demo-app',
      entities: [__dirname + '/**/*.entity{.ts, .js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


