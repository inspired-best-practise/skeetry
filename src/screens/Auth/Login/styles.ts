import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '_app/utils/getDimensions';

export const s = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },
  loginForm: {
    width: SCREEN_WIDTH * 0.9,
  },
  btnLogin: {
    marginTop: 7.5,
    width: '100%',
    height: 44,
    borderRadius: 5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  textInputWrapper: {
    position: 'relative',
    width: '100%',
    height: 44,
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 7.5,
  },
  input: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
  },
  forgotPassword: {
    width: SCREEN_WIDTH * 0.9,
    marginVertical: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: '600',
  },
  registerWrapper: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ddd',
    borderTopWidth: 1,
  },
  centerContainer: {
    height: SCREEN_HEIGHT - 50 - 40 - STATUS_BAR_HEIGHT,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerWrapperText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  registerWrapperTextBold: {
    fontWeight: '500',
    color: '#333',
  },
  errorLogin: {
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
});
