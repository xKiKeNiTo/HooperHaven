import { Injectable } from '@nestjs/common';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from './entities/compra.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ComprasService {

  constructor(@InjectModel('Compra') private readonly compraModel: Model<Compra>) { }

  async createCompra(createCompraDto: CreateCompraDto): Promise<Compra> {
    const compra = new this.compraModel(createCompraDto);
    return compra.save();
  }

  create(createCompraDto: CreateCompraDto) {
    return 'This action adds a new compra';
  }

  findAll() {
    return `This action returns all compras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compra`;
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    return `This action updates a #${id} compra`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra`;
  }
}
