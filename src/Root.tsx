import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import React from 'react';
import Toast from 'react-native-toast-message';

import {Provider} from 'react-redux';
import App from './App';
import {store} from './store';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </NavigationContainer>
    </ApplicationProvider>
    <Toast topOffset={64} />
  </>
);
