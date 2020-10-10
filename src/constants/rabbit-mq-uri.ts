import config from "../config";

export const rabbitMqUri = `amqp://${config.rabbitMqUser}:${config.rabbitMqPassword}@${config.rabbitMqHost}:${config.rabbitMqPort}`