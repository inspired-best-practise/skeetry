export type HomeTabParamList = {
  HomeIndex: undefined;
  Explore: undefined;
  Add: undefined;
  Activity: undefined;
  Account: undefined;
};

export type rootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  StoryTaker: undefined;
  Direct: undefined;
};

export type commonParamList = AuthStackParamList & HomeTabParamList & rootStackParamList;

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: WelcomePropsRouteParams;
};
