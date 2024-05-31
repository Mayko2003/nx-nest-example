import 'dotenv/config';
import * as joi from 'joi';

interface EnvConfig {
  PORT: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const envConfig: EnvConfig = value;
