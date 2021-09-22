import * as Sentry from '@sentry/react-native';

import {SENTRY_DSN} from '@constants';

export const routingInstrumentation =
  new Sentry.ReactNavigationInstrumentation();

export const sentryConfig: Sentry.ReactNativeOptions = {
  dsn: SENTRY_DSN,
  integrations: [
    new Sentry.ReactNativeTracing({
      // Pass instrumentation to be used as `routingInstrumentation`
      routingInstrumentation
    })
  ]
};
