import Config from 'react-native-config';

const API_HASH_MAP: Record<string, string | undefined> = {
  prod: Config.PROD_URL,
  stage: Config.STAGE_URL,
  dev: Config.DEV_URL,
};

const ENV = Config.APP_ENV || 'dev';

export const CONFIG = {
  apiUrl: API_HASH_MAP[ENV],
  sentryDsn: Config.SENTRY_DSN || '',
};
