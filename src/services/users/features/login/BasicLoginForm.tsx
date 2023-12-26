import {
  Button,
  Icon,
  IconElement,
  IconProps,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React, {ReactElement} from 'react';
import {
  ImageProps,
  ImageStyle,
  TextProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {RenderProp} from '@ui-kitten/components/devsupport';
import {Controller, useForm} from 'react-hook-form';
import {loginSchema} from '../../validations/auth';

export const PersonIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name="person" />
);

const AlertIcon = (props): IconElement => (
  <Icon {...props} fill="#ff3333" name="alert-circle-outline" />
);

export interface FormData {
  email: string;
  password: string;
}

interface Props {
  defaultValues?: FormData;
  onSignUpPress?: () => void;
  onSubmit: (formData: FormData) => void;
  onForgotPasswordPress?: () => void;
}

const BasicLoginForm: React.FC<Props> = ({
  defaultValues,
  onSubmit,
  onForgotPasswordPress,
  onSignUpPress,
}) => {
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const styles = useStyleSheet(themedStyles);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: loginSchema,
    mode: 'onBlur',
    defaultValues: {
      email: defaultValues?.email || '',
      password: defaultValues?.password || '',
    },
  });

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderPasswordIcon = (props: IconProps): ReactElement => (
    <TouchableOpacity onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableOpacity>
  );

  const renderEmailErrorMessage = () => {
    if (!errors.email) {
      return undefined;
    }

    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          {errors.email?.message || 'Email is required'}
        </Text>
      </View>
    );
  };

  const renderPasswordErrorMessage = () => {
    if (!errors.password) {
      return undefined;
    }

    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          {errors.password?.message ||
            'Password must be at least 8 characters long'}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text category="h1" status="control">
          Hello
        </Text>
        <Text style={styles.signInLabel} category="s1" status="control">
          Sign in to your account
        </Text>
      </View>
      <Layout style={styles.formContainer} level="1">
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder="Email"
              autoCapitalize="none"
              accessoryRight={PersonIcon as RenderProp<Partial<ImageProps>>}
              value={value}
              caption={renderEmailErrorMessage as RenderProp<TextProps>}
              onChangeText={onChange}
              onBlur={onBlur}
              status={errors.email ? 'danger' : 'basic'}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              style={styles.passwordInput}
              placeholder="Password"
              accessoryRight={renderPasswordIcon}
              value={value}
              secureTextEntry={!passwordVisible}
              caption={renderPasswordErrorMessage as RenderProp<TextProps>}
              onChangeText={onChange}
              onBlur={onBlur}
              status={errors.password ? 'danger' : 'basic'}
            />
          )}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance="ghost"
            status="basic"
            onPress={onForgotPasswordPress}>
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button
        style={styles.signInButton}
        size="giant"
        onPress={handleSubmit(onSubmit)}>
        SIGN IN
      </Button>
      <Button
        style={styles.signUpButton}
        appearance="ghost"
        status="basic"
        onPress={onSignUpPress}>
        Don't have an account? Create
      </Button>
    </KeyboardAwareScrollView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
  captionContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#ff3333',
  },
});

export default BasicLoginForm;
