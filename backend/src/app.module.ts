import { AuthModule } from './auth/auth.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ProductsModule } from './products/products.module';
import { ComprasModule } from './compras/compras.module';

@Module({
  imports: [
    
    AuthModule,
    ProductsModule,

    ConfigModule.forRoot(),

    MongooseModule.forRoot(process.env.MONGU_URI),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '6h' },
    }),

    ComprasModule,

    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

  

}
