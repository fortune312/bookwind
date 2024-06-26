import { port, str } from 'envalid';
import { makeValidators, Static } from 'nestjs-envalid';

const config = {
  DB_URI: str(),
  PORT: port({ default: 3000 }),
  GLOBAL_PREFIX: str({ default: 'api' }),
  LOGTAIL_SOURCE: str(),
  EXPRESS_SESSION_SECRET: str(),
  GOOGLE_CLIENT_ID: str(),
  GOOGLE_PASSWORD: str(),
  GOOGLE_EMAIL: str(),
  GOOGLE_CLIENT_SECRET: str(),
  MAIL_HOST: str(),
  MAIL_PORT: port(),
};

export const validators = makeValidators(config);
export type Config = Static<typeof validators>;
export const ENV = 'EnvalidModuleEnv';
