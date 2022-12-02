import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()) //config of validation pipe

  const config = new DocumentBuilder() ///congig of swagger documentation 
    .setTitle('Nest API')
    .setDescription('Nest API description')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config) //creating swaggerdocumnet with this app and config
  SwaggerModule.setup('/',app,document)//setup of route with app and document 
  await app.listen(3000);
}
bootstrap();
