import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { Roles } from '../src/@types/roles';
import { RpcExceptionFilter } from '../src/filters/rpc-exception.filter';
import { HttpExceptionFilter } from '../src/filters/http-exception.filter';
import { HttpAdapterHost } from '@nestjs/core';
import { json } from 'body-parser';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let baseUrl: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
  
    const { httpAdapter } = app.get(HttpAdapterHost);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new RpcExceptionFilter(httpAdapter), new HttpExceptionFilter());

    app.enableCors();
    app.use(json());

    await app.init();
  });

  afterEach(async () => {
    await app.close();
  })

  describe('/v1/users (POST)', () => {
    baseUrl = '/v1/users';

    it('should throw a error if not the required inputs', async () => {
      const res = await request(app.getHttpServer())
        .post(baseUrl).send({})

      expect(res.status).toBe(422);
      expect(res.body).toHaveProperty('error', 'Bad Request');
      expect(res.body).toHaveProperty('message');
      expect(res.body.message).toContain('name should not be empty');
      expect(res.body.message).toContain('password should not be empty');
      expect(res.body.message).toContain('level should not be empty');
    })

    it('should throw a error if level is not in Roles', async () => {
      const res = await request(app.getHttpServer())
        .post(baseUrl).send({})

      expect(res.status).toBe(422);
      expect(res.body).toHaveProperty('error', 'Bad Request');
      expect(res.body).toHaveProperty('message');
      
      const expectedString = 'level must be one of the following values:';
      const matches = res.body.message.filter(msg => msg.includes(expectedString)).length;
      expect(matches).toBeGreaterThan(0);
    })

    it('should successfully create user', async () => {
      const res = await request(app.getHttpServer())
      .post(baseUrl)
          .send({
            name: 'test',
            password: '81dc9bdb52d04dc20036dbd8313ed055',
            level: Roles.USER
          });

      expect(res.status).toBe(201);
    })
  });
});
