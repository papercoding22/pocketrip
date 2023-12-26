import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const loginSchema = yupResolver(
  yup
    .object({
      email: yup
        .string()
        .required('Email is required')
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          'Invalid email address',
        ),
      password: yup
        .string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
        ),
    })
    .required(),
);

export {loginSchema};
