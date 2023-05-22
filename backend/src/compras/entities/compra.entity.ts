import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Compra extends Document {
    @Prop({ required: true })
    userId: string;

    @Prop({ type: [{ type: String, required: true }] })
    productsIds: string[];

    @Prop({ required: true, default: Date.now })
    fecha: Date;
}

export const CompraSchema = SchemaFactory.createForClass(Compra);