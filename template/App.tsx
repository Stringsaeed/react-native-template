import React from "react";
import { ThemeProvider } from "restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Navigation from "@navigation";
import { CommonStyles, Theme } from "@styles";
import { Portal } from "react-native-portalize";

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <GestureHandlerRootView style={CommonStyles.container}>
          <Portal>
            <Navigation />
          </Portal>
        </GestureHandlerRootView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
