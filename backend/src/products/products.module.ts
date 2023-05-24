import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';
import { Compra, CompraSchema } from '../compras/entities/compra.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],

  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forFeature([{
      name: Product.name,
      schema: ProductSchema
    },
    { 
      name: Compra.name, 
      schema: CompraSchema 
    },
  ]),

  ],

})
export class ProductsModule { }