import React from 'react';
import PublicApp from './PublicApp';
import PrivateApp from './PrivateApp';
import useBootstrap from './useBootstrap';

const App = () => {
  const {isAuthenticated} = useBootstrap();
  return <>{isAuthenticated ? <PrivateApp /> : <PublicApp />}</>;
};

export default App;
