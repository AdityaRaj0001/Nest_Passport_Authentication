import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session'
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session({
    secret:'thesecret',
    resave:false,
    saveUnitialized:false,
    cookie:{maxAge:3600000}
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(3000);
}
bootstrap();
