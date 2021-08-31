type HomeTabParamList = {
  HomeIndexPage: undefined;
  ExplorePage: undefined;
  AddPage: undefined;
  ActivityPage: undefined;
  AccountPage: undefined;
};

type rootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  CardScreen: undefined;
};

type commonParamList = AuthStackParamList & HomeTabParamList & rootStackParamList;

type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Welcome: WelcomePropsRouteParams;
};
