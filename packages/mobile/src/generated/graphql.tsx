import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type ActionCityInput = {
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  user: User;
};

export type CitiesInput = {
  cityTagId: Scalars['ID'];
};

export type City = {
  __typename?: 'City';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  images?: Maybe<Array<Image>>;
  isCapital: Scalars['Boolean'];
  latitude: Scalars['String'];
  localizations?: Maybe<Array<CityLocalization>>;
  longitude: Scalars['String'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  pk: Scalars['Int'];
  state: State;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  userVisited?: Maybe<Array<User>>;
  userWanted?: Maybe<Array<User>>;
  visitedCount: Scalars['Int'];
  wantedCount: Scalars['Int'];
};

export type CityConnection = {
  __typename?: 'CityConnection';
  edges?: Maybe<Array<CityEdge>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CityEdge = {
  __typename?: 'CityEdge';
  cursor: Scalars['String'];
  node: City;
};

export type CityLocalization = {
  __typename?: 'CityLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Locale;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type CityOrder = {
  direction: OrderDirection;
};

export type Country = {
  __typename?: 'Country';
  continent: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  currencySymbol: Scalars['String'];
  emoji?: Maybe<Scalars['String']>;
  emojiU: Scalars['String'];
  id: Scalars['ID'];
  iso2: Scalars['String'];
  iso3: Scalars['String'];
  latitude: Scalars['String'];
  localizations?: Maybe<Array<CountryLocalization>>;
  longitude: Scalars['String'];
  name: Scalars['String'];
  native?: Maybe<Scalars['String']>;
  numericCode: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  phoneCode: Scalars['String'];
  pk: Scalars['Int'];
  states?: Maybe<Array<State>>;
  subregion: Scalars['String'];
  tld: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type CountryLocalization = {
  __typename?: 'CountryLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Locale;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type Image = {
  __typename?: 'Image';
  city?: Maybe<Array<City>>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  urlRegular: Scalars['String'];
  urlSmall: Scalars['String'];
  urlThumb: Scalars['String'];
};

export enum Locale {
  En = 'EN',
  Ru = 'RU'
}

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCity: City;
  confirmSmsCode: Scalars['Boolean'];
  login: Auth;
  moveCity: City;
  refreshToken: Token;
  removeCity: City;
  sendSmsCode: Scalars['Boolean'];
  signup: Auth;
};


export type MutationAddCityArgs = {
  input: ActionCityInput;
};


export type MutationConfirmSmsCodeArgs = {
  code: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMoveCityArgs = {
  input: ActionCityInput;
};


export type MutationRemoveCityArgs = {
  input: ActionCityInput;
};


export type MutationSendSmsCodeArgs = {
  phone: Scalars['String'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  cities: CityConnection;
  city: City;
  countries: Array<Country>;
  country: Country;
  me: User;
  nearby: CityConnection;
  popular: CityConnection;
  stories: Array<Story>;
  tags: Array<Tag>;
  visited: CityConnection;
  wanted: CityConnection;
};


export type QueryCitiesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  continent?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  input?: Maybe<CitiesInput>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCityArgs = {
  id: Scalars['String'];
};


export type QueryCountryArgs = {
  id: Scalars['Int'];
};


export type QueryNearbyArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPopularArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryVisitedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryWantedArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
};

export type SignupInput = {
  code: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  cities?: Maybe<Array<City>>;
  country: Country;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  latitude?: Maybe<Scalars['String']>;
  localizations?: Maybe<Array<StateLocalization>>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  pk: Scalars['Int'];
  stateCode?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type StateLocalization = {
  __typename?: 'StateLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  name: Scalars['String'];
  overview: Scalars['String'];
  state: State;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type Story = {
  __typename?: 'Story';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type Tag = {
  __typename?: 'Tag';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  emoji: Scalars['String'];
  id: Scalars['ID'];
  localizations?: Maybe<Array<TagLocalization>>;
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type TagLocalization = {
  __typename?: 'TagLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Locale;
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type Token = {
  __typename?: 'Token';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  phone: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  visitedCount: Scalars['Int'];
  wantedCount: Scalars['Int'];
};

export type RegularCityFragment = { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> };

export type RegularCityLocalizationFragment = { __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> };

export type RegularCountryFragment = { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> };

export type RegularCountryLocalizationFragment = { __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> };

export type RegularImageFragment = { __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string };

export type RegularPageInfoFragment = { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> };

export type RegularStateFragment = { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> };

export type RegularStateLocalizationFragment = { __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string };

export type RegularTagFragment = { __typename?: 'Tag', id: string, name: string, emoji: string, localizations?: Maybe<Array<{ __typename?: 'TagLocalization', id: string, name: string, locale: Locale }>> };

export type RegularTagLocalizationFragment = { __typename?: 'TagLocalization', id: string, name: string, locale: Locale };

export type RegularUserFragment = { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any };

export type AddCityMutationVariables = Exact<{
  input: ActionCityInput;
}>;


export type AddCityMutation = { __typename?: 'Mutation', addCity: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type ConfirmSmsCodeMutationVariables = Exact<{
  phone: Scalars['String'];
  code: Scalars['String'];
}>;


export type ConfirmSmsCodeMutation = { __typename?: 'Mutation', confirmSmsCode: boolean };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type MoveCityMutationVariables = Exact<{
  input: ActionCityInput;
}>;


export type MoveCityMutation = { __typename?: 'Mutation', moveCity: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type RemoveCityMutationVariables = Exact<{
  input: ActionCityInput;
}>;


export type RemoveCityMutation = { __typename?: 'Mutation', removeCity: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type SendSmsCodeMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type SendSmsCodeMutation = { __typename?: 'Mutation', sendSmsCode: boolean };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type CitiesQueryVariables = Exact<{
  continent?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  input?: Maybe<CitiesInput>;
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  query?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type CitiesQuery = { __typename?: 'Query', cities: { __typename?: 'CityConnection', totalCount: number, edges?: Maybe<Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } }>>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } };

export type CityQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type CityQuery = { __typename?: 'Query', city: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } };

export type NearbyQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type NearbyQuery = { __typename?: 'Query', nearby: { __typename?: 'CityConnection', totalCount: number, edges?: Maybe<Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } }>>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } };

export type PopularQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type PopularQuery = { __typename?: 'Query', popular: { __typename?: 'CityConnection', totalCount: number, edges?: Maybe<Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } }>>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, name: string, emoji: string, localizations?: Maybe<Array<{ __typename?: 'TagLocalization', id: string, name: string, locale: Locale }>> }> };

export type VisitedQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type VisitedQuery = { __typename?: 'Query', visited: { __typename?: 'CityConnection', totalCount: number, edges?: Maybe<Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } }>>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } };

export type WantedQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first: Scalars['Int'];
  last?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CityOrder>;
  skip?: Maybe<Scalars['Int']>;
}>;


export type WantedQuery = { __typename?: 'Query', wanted: { __typename?: 'CityConnection', totalCount: number, edges?: Maybe<Array<{ __typename?: 'CityEdge', cursor: string, node: { __typename?: 'City', id: string, pk: number, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, latitude: string, longitude: string, isCapital: boolean, images?: Maybe<Array<{ __typename?: 'Image', id: string, urlRegular: string, urlSmall: string, urlThumb: string }>>, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, state: { __typename?: 'State', id: string, pk: number, name: string, stateCode?: Maybe<string>, latitude?: Maybe<string>, longitude?: Maybe<string>, overview?: Maybe<string>, country: { __typename?: 'Country', id: string, pk: number, name: string, iso2: string, iso3: string, numericCode: string, phoneCode: string, currency: string, currencySymbol: string, tld: string, native?: Maybe<string>, continent: string, subregion: string, latitude: string, longitude: string, emoji?: Maybe<string>, emojiU: string, overview?: Maybe<string>, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'StateLocalization', id: string, locale: string, name: string, overview: string }>> }, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, localizations?: Maybe<Array<{ __typename?: 'CityLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } }>>, pageInfo: { __typename?: 'PageInfo', endCursor?: Maybe<string>, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: Maybe<string> } } };

export const RegularImageFragmentDoc = gql`
    fragment RegularImage on Image {
  id
  urlRegular
  urlSmall
  urlThumb
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  phone
  username
  avatar
  wantedCount
  visitedCount
  createdAt
  updatedAt
}
    `;
export const RegularCountryLocalizationFragmentDoc = gql`
    fragment RegularCountryLocalization on CountryLocalization {
  id
  locale
  name
  overview
}
    `;
export const RegularCountryFragmentDoc = gql`
    fragment RegularCountry on Country {
  id
  pk
  name
  iso2
  iso3
  numericCode
  phoneCode
  currency
  currencySymbol
  tld
  native
  continent
  subregion
  latitude
  longitude
  emoji
  emojiU
  overview
  localizations {
    ...RegularCountryLocalization
  }
}
    ${RegularCountryLocalizationFragmentDoc}`;
export const RegularStateLocalizationFragmentDoc = gql`
    fragment RegularStateLocalization on StateLocalization {
  id
  locale
  name
  overview
}
    `;
export const RegularStateFragmentDoc = gql`
    fragment RegularState on State {
  id
  pk
  name
  stateCode
  latitude
  longitude
  overview
  country {
    ...RegularCountry
  }
  localizations {
    ...RegularStateLocalization
  }
}
    ${RegularCountryFragmentDoc}
${RegularStateLocalizationFragmentDoc}`;
export const RegularCityLocalizationFragmentDoc = gql`
    fragment RegularCityLocalization on CityLocalization {
  id
  locale
  name
  overview
}
    `;
export const RegularCityFragmentDoc = gql`
    fragment RegularCity on City {
  id
  pk
  name
  overview
  wantedCount
  visitedCount
  latitude
  longitude
  isCapital
  images {
    ...RegularImage
  }
  userWanted {
    ...RegularUser
  }
  state {
    ...RegularState
  }
  userVisited {
    ...RegularUser
  }
  localizations {
    ...RegularCityLocalization
  }
}
    ${RegularImageFragmentDoc}
${RegularUserFragmentDoc}
${RegularStateFragmentDoc}
${RegularCityLocalizationFragmentDoc}`;
export const RegularPageInfoFragmentDoc = gql`
    fragment RegularPageInfo on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const RegularTagLocalizationFragmentDoc = gql`
    fragment RegularTagLocalization on TagLocalization {
  id
  name
  locale
}
    `;
export const RegularTagFragmentDoc = gql`
    fragment RegularTag on Tag {
  id
  name
  emoji
  localizations {
    ...RegularTagLocalization
  }
}
    ${RegularTagLocalizationFragmentDoc}`;
export const AddCityDocument = gql`
    mutation addCity($input: ActionCityInput!) {
  addCity(input: $input) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;
export type AddCityMutationFn = Apollo.MutationFunction<AddCityMutation, AddCityMutationVariables>;

/**
 * __useAddCityMutation__
 *
 * To run a mutation, you first call `useAddCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCityMutation, { data, loading, error }] = useAddCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCityMutation(baseOptions?: Apollo.MutationHookOptions<AddCityMutation, AddCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCityMutation, AddCityMutationVariables>(AddCityDocument, options);
      }
export type AddCityMutationHookResult = ReturnType<typeof useAddCityMutation>;
export type AddCityMutationResult = Apollo.MutationResult<AddCityMutation>;
export type AddCityMutationOptions = Apollo.BaseMutationOptions<AddCityMutation, AddCityMutationVariables>;
export const ConfirmSmsCodeDocument = gql`
    mutation confirmSmsCode($phone: String!, $code: String!) {
  confirmSmsCode(phone: $phone, code: $code)
}
    `;
export type ConfirmSmsCodeMutationFn = Apollo.MutationFunction<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>;

/**
 * __useConfirmSmsCodeMutation__
 *
 * To run a mutation, you first call `useConfirmSmsCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmSmsCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmSmsCodeMutation, { data, loading, error }] = useConfirmSmsCodeMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useConfirmSmsCodeMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>(ConfirmSmsCodeDocument, options);
      }
export type ConfirmSmsCodeMutationHookResult = ReturnType<typeof useConfirmSmsCodeMutation>;
export type ConfirmSmsCodeMutationResult = Apollo.MutationResult<ConfirmSmsCodeMutation>;
export type ConfirmSmsCodeMutationOptions = Apollo.BaseMutationOptions<ConfirmSmsCodeMutation, ConfirmSmsCodeMutationVariables>;
export const LoginDocument = gql`
    mutation login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MoveCityDocument = gql`
    mutation moveCity($input: ActionCityInput!) {
  moveCity(input: $input) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;
export type MoveCityMutationFn = Apollo.MutationFunction<MoveCityMutation, MoveCityMutationVariables>;

/**
 * __useMoveCityMutation__
 *
 * To run a mutation, you first call `useMoveCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveCityMutation, { data, loading, error }] = useMoveCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMoveCityMutation(baseOptions?: Apollo.MutationHookOptions<MoveCityMutation, MoveCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveCityMutation, MoveCityMutationVariables>(MoveCityDocument, options);
      }
export type MoveCityMutationHookResult = ReturnType<typeof useMoveCityMutation>;
export type MoveCityMutationResult = Apollo.MutationResult<MoveCityMutation>;
export type MoveCityMutationOptions = Apollo.BaseMutationOptions<MoveCityMutation, MoveCityMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken {
  refreshToken {
    accessToken
    refreshToken
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RemoveCityDocument = gql`
    mutation removeCity($input: ActionCityInput!) {
  removeCity(input: $input) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;
export type RemoveCityMutationFn = Apollo.MutationFunction<RemoveCityMutation, RemoveCityMutationVariables>;

/**
 * __useRemoveCityMutation__
 *
 * To run a mutation, you first call `useRemoveCityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCityMutation, { data, loading, error }] = useRemoveCityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveCityMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCityMutation, RemoveCityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCityMutation, RemoveCityMutationVariables>(RemoveCityDocument, options);
      }
export type RemoveCityMutationHookResult = ReturnType<typeof useRemoveCityMutation>;
export type RemoveCityMutationResult = Apollo.MutationResult<RemoveCityMutation>;
export type RemoveCityMutationOptions = Apollo.BaseMutationOptions<RemoveCityMutation, RemoveCityMutationVariables>;
export const SendSmsCodeDocument = gql`
    mutation sendSmsCode($phone: String!) {
  sendSmsCode(phone: $phone)
}
    `;
export type SendSmsCodeMutationFn = Apollo.MutationFunction<SendSmsCodeMutation, SendSmsCodeMutationVariables>;

/**
 * __useSendSmsCodeMutation__
 *
 * To run a mutation, you first call `useSendSmsCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendSmsCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendSmsCodeMutation, { data, loading, error }] = useSendSmsCodeMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useSendSmsCodeMutation(baseOptions?: Apollo.MutationHookOptions<SendSmsCodeMutation, SendSmsCodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendSmsCodeMutation, SendSmsCodeMutationVariables>(SendSmsCodeDocument, options);
      }
export type SendSmsCodeMutationHookResult = ReturnType<typeof useSendSmsCodeMutation>;
export type SendSmsCodeMutationResult = Apollo.MutationResult<SendSmsCodeMutation>;
export type SendSmsCodeMutationOptions = Apollo.BaseMutationOptions<SendSmsCodeMutation, SendSmsCodeMutationVariables>;
export const SignupDocument = gql`
    mutation signup($input: SignupInput!) {
  signup(input: $input) {
    accessToken
    refreshToken
    user {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const CitiesDocument = gql`
    query Cities($continent: String, $after: String, $before: String, $first: Int!, $input: CitiesInput, $last: Int, $orderBy: CityOrder, $query: String, $skip: Int) {
  cities(
    continent: $continent
    after: $after
    before: $before
    first: $first
    input: $input
    last: $last
    orderBy: $orderBy
    query: $query
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useCitiesQuery__
 *
 * To run a query within a React component, call `useCitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCitiesQuery({
 *   variables: {
 *      continent: // value for 'continent'
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      input: // value for 'input'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      query: // value for 'query'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCitiesQuery(baseOptions: Apollo.QueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
      }
export function useCitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CitiesQuery, CitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CitiesQuery, CitiesQueryVariables>(CitiesDocument, options);
        }
export type CitiesQueryHookResult = ReturnType<typeof useCitiesQuery>;
export type CitiesLazyQueryHookResult = ReturnType<typeof useCitiesLazyQuery>;
export type CitiesQueryResult = Apollo.QueryResult<CitiesQuery, CitiesQueryVariables>;
export const CityDocument = gql`
    query City($id: String!) {
  city(id: $id) {
    ...RegularCity
  }
}
    ${RegularCityFragmentDoc}`;

/**
 * __useCityQuery__
 *
 * To run a query within a React component, call `useCityQuery` and pass it any options that fit your needs.
 * When your component renders, `useCityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCityQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCityQuery(baseOptions: Apollo.QueryHookOptions<CityQuery, CityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CityQuery, CityQueryVariables>(CityDocument, options);
      }
export function useCityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CityQuery, CityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CityQuery, CityQueryVariables>(CityDocument, options);
        }
export type CityQueryHookResult = ReturnType<typeof useCityQuery>;
export type CityLazyQueryHookResult = ReturnType<typeof useCityLazyQuery>;
export type CityQueryResult = Apollo.QueryResult<CityQuery, CityQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const NearbyDocument = gql`
    query Nearby($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int) {
  nearby(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useNearbyQuery__
 *
 * To run a query within a React component, call `useNearbyQuery` and pass it any options that fit your needs.
 * When your component renders, `useNearbyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNearbyQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useNearbyQuery(baseOptions: Apollo.QueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NearbyQuery, NearbyQueryVariables>(NearbyDocument, options);
      }
export function useNearbyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NearbyQuery, NearbyQueryVariables>(NearbyDocument, options);
        }
export type NearbyQueryHookResult = ReturnType<typeof useNearbyQuery>;
export type NearbyLazyQueryHookResult = ReturnType<typeof useNearbyLazyQuery>;
export type NearbyQueryResult = Apollo.QueryResult<NearbyQuery, NearbyQueryVariables>;
export const PopularDocument = gql`
    query Popular($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int) {
  popular(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __usePopularQuery__
 *
 * To run a query within a React component, call `usePopularQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function usePopularQuery(baseOptions: Apollo.QueryHookOptions<PopularQuery, PopularQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options);
      }
export function usePopularLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularQuery, PopularQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options);
        }
export type PopularQueryHookResult = ReturnType<typeof usePopularQuery>;
export type PopularLazyQueryHookResult = ReturnType<typeof usePopularLazyQuery>;
export type PopularQueryResult = Apollo.QueryResult<PopularQuery, PopularQueryVariables>;
export const TagsDocument = gql`
    query Tags {
  tags {
    ...RegularTag
  }
}
    ${RegularTagFragmentDoc}`;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const VisitedDocument = gql`
    query Visited($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int) {
  visited(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useVisitedQuery__
 *
 * To run a query within a React component, call `useVisitedQuery` and pass it any options that fit your needs.
 * When your component renders, `useVisitedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVisitedQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useVisitedQuery(baseOptions: Apollo.QueryHookOptions<VisitedQuery, VisitedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VisitedQuery, VisitedQueryVariables>(VisitedDocument, options);
      }
export function useVisitedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VisitedQuery, VisitedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VisitedQuery, VisitedQueryVariables>(VisitedDocument, options);
        }
export type VisitedQueryHookResult = ReturnType<typeof useVisitedQuery>;
export type VisitedLazyQueryHookResult = ReturnType<typeof useVisitedLazyQuery>;
export type VisitedQueryResult = Apollo.QueryResult<VisitedQuery, VisitedQueryVariables>;
export const WantedDocument = gql`
    query Wanted($after: String, $before: String, $first: Int!, $last: Int, $orderBy: CityOrder, $skip: Int) {
  wanted(
    after: $after
    before: $before
    first: $first
    last: $last
    orderBy: $orderBy
    skip: $skip
  ) {
    edges {
      cursor
      node {
        ...RegularCity
      }
    }
    pageInfo {
      ...RegularPageInfo
    }
    totalCount
  }
}
    ${RegularCityFragmentDoc}
${RegularPageInfoFragmentDoc}`;

/**
 * __useWantedQuery__
 *
 * To run a query within a React component, call `useWantedQuery` and pass it any options that fit your needs.
 * When your component renders, `useWantedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWantedQuery({
 *   variables: {
 *      after: // value for 'after'
 *      before: // value for 'before'
 *      first: // value for 'first'
 *      last: // value for 'last'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useWantedQuery(baseOptions: Apollo.QueryHookOptions<WantedQuery, WantedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WantedQuery, WantedQueryVariables>(WantedDocument, options);
      }
export function useWantedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WantedQuery, WantedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WantedQuery, WantedQueryVariables>(WantedDocument, options);
        }
export type WantedQueryHookResult = ReturnType<typeof useWantedQuery>;
export type WantedLazyQueryHookResult = ReturnType<typeof useWantedLazyQuery>;
export type WantedQueryResult = Apollo.QueryResult<WantedQuery, WantedQueryVariables>;