import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef, routingInstrumentation} from '@services';

import RootNavigation from './RootNavigation';

const Navigation: React.FC = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routingInstrumentation.registerNavigationContainer(navigationRef);
      }}>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
