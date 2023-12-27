import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';

import PrivateApp from './PrivateApp';
import PublicApp from './PublicApp';
import LoadingOverlay from './components/LoadingOverlay';
import flexStyles from './styles/flex';
import layout from './styles/layout';
import spacingStyles from './styles/space';
import textStyles from './styles/text';
import useBootstrap from './useBootstrap';

const App = () => {
  const {data, isBootstrapping, bootstrapError, reload} = useBootstrap();

  const {isAuthenticated} = data;

  if (isBootstrapping) {
    return (
      <LoadingOverlay
        visible={isBootstrapping}
        textStyle={textStyles.textWhite}
        textContent="Loading..."
      />
    );
  }

  if (bootstrapError) {
    return (
      <Layout
        style={[
          layout.container,
          layout.centered,
          flexStyles.gap1,
          spacingStyles.p2,
        ]}>
        <Text style={textStyles.textCenter} category="h6">
          Something went wrong while loading the app. Please try again later.
        </Text>
        <Button onPress={reload}>
          <Text>Reload</Text>
        </Button>
      </Layout>
    );
  }

  return <>{isAuthenticated ? <PrivateApp /> : <PublicApp />}</>;
};

export default App;
