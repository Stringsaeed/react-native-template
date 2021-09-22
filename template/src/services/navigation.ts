import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

// @ts-expect-error
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    // @ts-expect-error
    navigationRef.navigate(name, params);
  }
}
