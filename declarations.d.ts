type HomeTabParamList = {
  HomeIndex: undefined;
  Explore: undefined;
  Add: undefined;
  Activity: undefined;
  Account: undefined;
};

type rootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  Direct: undefined;
  CardScreen: undefined;
};

type commonParamList = AuthStackParamList & HomeTabParamList & rootStackParamList;

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: WelcomePropsRouteParams;
};
