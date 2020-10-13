import { registerAs } from "@nestjs/config"

export default registerAs('mongo', () => ({
  host: process.env.MONGO_HOST,
  user: process.env.MONGO_USER,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
  uri: process.env.MONGO_URI
}))