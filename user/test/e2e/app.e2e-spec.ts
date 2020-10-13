import { Test, TestingModule } from '@nestjs/testing';
import amqp from 'amqplib';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { rabbitMqUri } from '../src/config/rabbit-mq-uri';
import { RabbitMqQueues } from '../src/constants/rabbit-mq-queues';

const queue = 'test-' + RabbitMqQueues.USER

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let channel;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    amqp.connect(rabbitMqUri, (err, conn) => {
      conn.createChannel((err, ch) => {
        channel = ch;
      })
    })
  });

  describe('createUser', () => {
    channel.assertQueue(queue, { durable: false });
    channel.sendToQueue(queue, Buffer.from({}))
  })
});
