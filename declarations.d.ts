export type THomeTabParamList = {
  HomeIndexPage: undefined;
  ExplorePage: undefined;
  AddPage: undefined;
  ActivityPage: undefined;
  AccountPage: undefined;
};

export type TRootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  CardScreen: undefined;
};

export type TAuthStackParamList = {
  Login: undefined;
  Phone: undefined;
  Code: undefined;
  Credentials: undefined;
  ForgotPassword: undefined;
  Welcome: undefined;
};

export type TCommonParamList = TAuthStackParamList & THomeTabParamList & TRootStackParamList;
