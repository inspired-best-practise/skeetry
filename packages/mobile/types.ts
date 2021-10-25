export type THomeTabParamList = {
  HomePage: undefined;
  ExplorePage: undefined;
  SwipesPage: undefined;
  AddChooser: undefined;
  ActivityPage: undefined;
  ProfilePage: undefined;
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

export type TUserAuth = {
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

export type TUser = {
  id: string;
  username: string;
  phone: string;
  avatar?: string;
  wantedCount: number;
  visitedCount: number;
  createdAt: string;
  updatedAt: string;
};
