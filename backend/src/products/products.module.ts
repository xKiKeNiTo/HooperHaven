import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],

  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([{
      name: Product.name,
      schema: ProductSchema
    }]),

  ],

})
export class ProductsModule { }