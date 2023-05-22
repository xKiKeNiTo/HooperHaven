import { Module } from '@nestjs/common';
import { ComprasService } from './compras.service';
import { ComprasController } from './compras.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CompraSchema } from './entities/compra.entity';

@Module({
  controllers: [ComprasController],
  providers: [ComprasService],
  imports: [
    MongooseModule.forFeature([{
      name: 'Compra',
      schema: CompraSchema
    }]),
  ],
})
export class ComprasModule { }
