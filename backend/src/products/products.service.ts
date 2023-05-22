import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectModel(Product.name) private productModel: Model<Product>) { }


  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {

      const newProduct = new this.productModel(createProductDto);
      const savedProduct = await newProduct.save();
      return savedProduct;

    } catch (error) {

      if (error.code === 11000) {
        throw new BadRequestException('Product already exists');
      }

      throw new InternalServerErrorException('Something went wrong');

    }

  }

  async findByCategory(category: string): Promise<Product[]> {
    return this.productModel.find({ category }).exec();
  }

  async findById(id: string): Promise<Product | null> {
    return this.productModel.findById(id).exec();
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
