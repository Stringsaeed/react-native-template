import React from 'react';
import {ThemeProvider} from 'restyle';
import * as Sentry from '@sentry/react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Navigation from '@navigation';
import {sentryConfig} from '@services';
import {CommonStyles, Theme} from '@styles';
import {Portal} from 'react-native-portalize';

Sentry.init(sentryConfig);

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Sentry.ErrorBoundary>
        <Sentry.TouchEventBoundary>
          <ThemeProvider theme={Theme}>
            <GestureHandlerRootView style={CommonStyles.container}>
              <Portal>
                <Navigation />
              </Portal>
            </GestureHandlerRootView>
          </ThemeProvider>
        </Sentry.TouchEventBoundary>
      </Sentry.ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default Sentry.wrap(App);
