import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Version
  app.enableVersioning({
    defaultVersion: '1',
    type: VersioningType.URI,
  });

  //Swagger
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(' Creacion de Formulario para registro de pacientes')
    .setDescription('Api para hacer peticiones POST, GET, GET/:ID y PATCH')
    .setVersion('1.0')
    .addTag('Registro de Paciente')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  //Validaciones de manera global
  app.useGlobalPipes(new ValidationPipe());

  //Puerto de comunicacion 3000
  await app.listen(process.env.PORT_DOCKER || 3000);
}
bootstrap();
