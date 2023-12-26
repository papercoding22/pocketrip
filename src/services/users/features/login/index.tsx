import React from 'react';
import BasicLoginForm, {FormData} from './BasicLoginForm';
import useLogin from './useBasicLogin';
import LoadingOverlay from '../../../../components/LoadingOverlay';

const Login = () => {
  const {loading, login} = useLogin();
  const handleOnSubmit = async (formData: FormData) => {
    await login({
      username: formData.email,
      password: formData.password,
    });
  };

  return (
    <>
      <BasicLoginForm
        defaultValues={{
          email: 'admin@example.com',
          password: 'Admin@12345678',
        }}
        onSubmit={handleOnSubmit}
      />
      <LoadingOverlay
        textContent="Sign in"
        textStyle={{
          color: '#FFF',
          fontSize: 15,
          fontWeight: 'normal',
        }}
        visible={loading}
      />
    </>
  );
};

export default Login;
