import { AppRegistry, LogBox } from 'react-native';
import { Main } from './src/screens/_main';
import { name as appName } from './app.json';
import * as Sentry from '@sentry/react-native';
import { CONFIG } from '@constants/config';

LogBox.ignoreAllLogs(true);

Sentry.init({
  dsn: CONFIG.sentryDsn,
  tracesSampleRate: 1.0,
});

AppRegistry.registerComponent(appName, () => Main);
