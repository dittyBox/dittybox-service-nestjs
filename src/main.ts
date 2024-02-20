import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule, 
    {abortOnError: false} // 기본적으로 애플리케이션을 생성하는 동안 오류가 발생하면 앱은 코드와 함께 종료됩니다. 오류가 발생하도록 하려면 옵션 abortOnError을 비활성화
  );
  await app.listen(8082);
}
bootstrap();
