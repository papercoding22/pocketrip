import {useCallback, useEffect, useRef, useState} from 'react';
import useBootstrapUserService from './services/users/hooks/useUserService';

const useBootstrap = () => {
  const bootstrapped = useRef(false);
  const [bootstrapError, setBootstrapError] = useState<Error | null>(null);
  const [isBootstrapping, setIsBootstrapping] = useState(false);
  const {isAuthenticated, bootstrap: bootstrapUserService} =
    useBootstrapUserService();

  const bootstrap = useCallback(async () => {
    try {
      setIsBootstrapping(true);
      await bootstrapUserService();
    } catch (error) {
      setBootstrapError(error as Error);
    } finally {
      setIsBootstrapping(false);
    }
  }, [bootstrapUserService]);

  const reload = useCallback(async () => {
    setBootstrapError(null);
    await bootstrap();
  }, [bootstrap]);

  useEffect(() => {
    if (!bootstrapped.current) {
      bootstrap().finally(() => {
        bootstrapped.current = true;
      });
    }
  }, [bootstrap]);

  return {
    bootstrapError,
    isBootstrapping,
    data: {
      isAuthenticated,
    },
    bootstrap,
    reload,
  };
};

export default useBootstrap;
