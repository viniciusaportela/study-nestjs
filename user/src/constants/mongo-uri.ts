import config from "../config";

export const mongoUri = `mongodb://${config.mongoUser}:${config.mongoPassword}@${config.mongoHost}/${config.mongoDatabase}`