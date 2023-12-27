import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';

import PrivateApp from './PrivateApp';
import PublicApp from './PublicApp';
import LoadingOverlay from './components/LoadingOverlay';
import useBootstrap from './useBootstrap';

const App = () => {
  const {data, isBootstrapping, bootstrapError, reload} = useBootstrap();

  const {isAuthenticated} = data;

  if (isBootstrapping) {
    return (
      <LoadingOverlay visible={isBootstrapping} textContent="Loading..." />
    );
  }

  if (bootstrapError) {
    return (
      <Layout
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
          padding: 32,
        }}>
        <Text style={{textAlign: 'center'}} category="h6">
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
