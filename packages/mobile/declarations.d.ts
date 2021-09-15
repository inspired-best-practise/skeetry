type THomeTabParamList = {
  HomePage: undefined;
  ExplorePage: undefined;
  SwipesPage: undefined;
  AddPage: undefined;
  ActivityPage: undefined;
  ProfilePage: undefined;
};

type TRootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  CardScreen: undefined;
};

type TAuthStackParamList = {
  Login: undefined;
  Phone: undefined;
  Code: undefined;
  Credentials: undefined;
  ForgotPassword: undefined;
  Welcome: undefined;
};

type TCommonParamList = TAuthStackParamList & THomeTabParamList & TRootStackParamList;

type TUserAuth = {
  user: TUser;
  accessToken: string;
  refreshToken: string;
};

type TUser = {
  id: string;
  username: string;
  phone: string;
  avatar?: string;
  wantedCount: number;
  visitedCount: number;
  createdAt: string;
  updatedAt: string;
};
