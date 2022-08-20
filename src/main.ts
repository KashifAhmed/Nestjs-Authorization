import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerDocumentOptions } from './common/swagger.doc'

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Authorization Module')
  .setDescription('Description for authorization module')
  .setVersion('1.0')
  .addTag('authorize')
  .build();


  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = 3000;

  app.useGlobalPipes(new ValidationPipe());  
  await app.listen(port).then(value=>{
    console.log("Server is listening on port", port);
  });
}
bootstrap();
