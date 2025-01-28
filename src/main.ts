import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Perfomance Go - Bloco 02')
  .setDescription('Projeto Final')
  .setContact("Emily Cristiny Dias","https://github.com/emilyestvz/projeto_final_bloco_02","emilyestvz@gmail.com")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00';
  
  app.useGlobalPipes( new ValidationPipe());
  app.enableCors();

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
