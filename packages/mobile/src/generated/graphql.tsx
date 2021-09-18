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

export type ActionItemInput = {
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

export type Country = {
  __typename?: 'Country';
  continent: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  flag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locale: Locale;
  localizations?: Maybe<Array<CountryLocalization>>;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
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

export type Item = {
  __typename?: 'Item';
  country: Country;
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  flag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude: Scalars['String'];
  locale: Locale;
  localizations?: Maybe<Array<ItemLocalization>>;
  longitude: Scalars['String'];
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  photos: Array<Scalars['String']>;
  reviewsCount: Scalars['Int'];
  type: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  userVisited?: Maybe<Array<User>>;
  userWanted?: Maybe<Array<User>>;
  visitedCount: Scalars['Int'];
  wantedCount: Scalars['Int'];
};

export type ItemLocalization = {
  __typename?: 'ItemLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Locale;
  name: Scalars['String'];
  overview?: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type ItemTag = {
  __typename?: 'ItemTag';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  emoji: Scalars['String'];
  id: Scalars['ID'];
  locale: Scalars['String'];
  localizations?: Maybe<Array<ItemTagLocalization>>;
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type ItemTagLocalization = {
  __typename?: 'ItemTagLocalization';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locale: Locale;
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type ItemsInput = {
  itemTagId: Scalars['ID'];
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
  addItem: Item;
  confirmSmsCode: Scalars['Boolean'];
  login: Auth;
  moveItem: Item;
  refreshToken: Token;
  removeItem: Item;
  sendSmsCode: Scalars['Boolean'];
  signup: Auth;
};


export type MutationAddItemArgs = {
  input: ActionItemInput;
};


export type MutationConfirmSmsCodeArgs = {
  code: Scalars['String'];
  phone: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMoveItemArgs = {
  input: ActionItemInput;
};


export type MutationRemoveItemArgs = {
  input: ActionItemInput;
};


export type MutationSendSmsCodeArgs = {
  phone: Scalars['String'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  countries: Array<Country>;
  country: Country;
  itemTags: Array<ItemTag>;
  items: Array<Item>;
  me: User;
  nearby: Array<Item>;
  popular: Array<Item>;
  stories: Array<Story>;
  visited: Array<Item>;
  wanted: Array<Item>;
};


export type QueryCountryArgs = {
  id: Scalars['Int'];
};


export type QueryItemsArgs = {
  input?: Maybe<ItemsInput>;
};

export type SignupInput = {
  code: Scalars['String'];
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
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

export type RegularCountryFragment = { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> };

export type RegularCountryLocalizationFragment = { __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> };

export type RegularItemFragment = { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> };

export type RegularItemLocalizationFragment = { __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> };

export type RegularItemTagFragment = { __typename?: 'ItemTag', id: string, name: string, emoji: string, locale: string, localizations?: Maybe<Array<{ __typename?: 'ItemTagLocalization', id: string, name: string, locale: Locale }>> };

export type RegularItemTagLocalizationFragment = { __typename?: 'ItemTagLocalization', id: string, name: string, locale: Locale };

export type RegularUserFragment = { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any };

export type AddItemMutationVariables = Exact<{
  input: ActionItemInput;
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem: { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type ConfirmSmsCodeMutationVariables = Exact<{
  phone: Scalars['String'];
  code: Scalars['String'];
}>;


export type ConfirmSmsCodeMutation = { __typename?: 'Mutation', confirmSmsCode: boolean };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type MoveItemMutationVariables = Exact<{
  input: ActionItemInput;
}>;


export type MoveItemMutation = { __typename?: 'Mutation', moveItem: { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type RemoveItemMutationVariables = Exact<{
  input: ActionItemInput;
}>;


export type RemoveItemMutation = { __typename?: 'Mutation', removeItem: { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type SendSmsCodeMutationVariables = Exact<{
  phone: Scalars['String'];
}>;


export type SendSmsCodeMutation = { __typename?: 'Mutation', sendSmsCode: boolean };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type ItemTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type ItemTagsQuery = { __typename?: 'Query', itemTags: Array<{ __typename?: 'ItemTag', id: string, name: string, emoji: string, locale: string, localizations?: Maybe<Array<{ __typename?: 'ItemTagLocalization', id: string, name: string, locale: Locale }>> }> };

export type ItemsQueryVariables = Exact<{
  input?: Maybe<ItemsInput>;
}>;


export type ItemsQuery = { __typename?: 'Query', items: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } };

export type NearbyQueryVariables = Exact<{ [key: string]: never; }>;


export type NearbyQuery = { __typename?: 'Query', nearby: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

export type PopularQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularQuery = { __typename?: 'Query', popular: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

export type VisitedQueryVariables = Exact<{ [key: string]: never; }>;


export type VisitedQuery = { __typename?: 'Query', visited: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

export type WantedQueryVariables = Exact<{ [key: string]: never; }>;


export type WantedQuery = { __typename?: 'Query', wanted: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, locale: Locale, userWanted?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, userVisited?: Maybe<Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>>, country: { __typename?: 'Country', id: string, name: string, overview?: Maybe<string>, continent: string, flag?: Maybe<string>, locale: Locale, localizations?: Maybe<Array<{ __typename?: 'CountryLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

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
  name
  overview
  continent
  flag
  locale
  localizations {
    ...RegularCountryLocalization
  }
}
    ${RegularCountryLocalizationFragmentDoc}`;
export const RegularItemLocalizationFragmentDoc = gql`
    fragment RegularItemLocalization on ItemLocalization {
  id
  locale
  name
  overview
}
    `;
export const RegularItemFragmentDoc = gql`
    fragment RegularItem on Item {
  id
  type
  name
  overview
  wantedCount
  visitedCount
  reviewsCount
  photos
  latitude
  longitude
  locale
  userWanted {
    ...RegularUser
  }
  userVisited {
    ...RegularUser
  }
  country {
    ...RegularCountry
  }
  localizations {
    ...RegularItemLocalization
  }
}
    ${RegularUserFragmentDoc}
${RegularCountryFragmentDoc}
${RegularItemLocalizationFragmentDoc}`;
export const RegularItemTagLocalizationFragmentDoc = gql`
    fragment RegularItemTagLocalization on ItemTagLocalization {
  id
  name
  locale
}
    `;
export const RegularItemTagFragmentDoc = gql`
    fragment RegularItemTag on ItemTag {
  id
  name
  emoji
  locale
  localizations {
    ...RegularItemTagLocalization
  }
}
    ${RegularItemTagLocalizationFragmentDoc}`;
export const AddItemDocument = gql`
    mutation addItem($input: ActionItemInput!) {
  addItem(input: $input) {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;
export type AddItemMutationFn = Apollo.MutationFunction<AddItemMutation, AddItemMutationVariables>;

/**
 * __useAddItemMutation__
 *
 * To run a mutation, you first call `useAddItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addItemMutation, { data, loading, error }] = useAddItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddItemMutation(baseOptions?: Apollo.MutationHookOptions<AddItemMutation, AddItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddItemMutation, AddItemMutationVariables>(AddItemDocument, options);
      }
export type AddItemMutationHookResult = ReturnType<typeof useAddItemMutation>;
export type AddItemMutationResult = Apollo.MutationResult<AddItemMutation>;
export type AddItemMutationOptions = Apollo.BaseMutationOptions<AddItemMutation, AddItemMutationVariables>;
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
export const MoveItemDocument = gql`
    mutation moveItem($input: ActionItemInput!) {
  moveItem(input: $input) {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;
export type MoveItemMutationFn = Apollo.MutationFunction<MoveItemMutation, MoveItemMutationVariables>;

/**
 * __useMoveItemMutation__
 *
 * To run a mutation, you first call `useMoveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMoveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [moveItemMutation, { data, loading, error }] = useMoveItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMoveItemMutation(baseOptions?: Apollo.MutationHookOptions<MoveItemMutation, MoveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MoveItemMutation, MoveItemMutationVariables>(MoveItemDocument, options);
      }
export type MoveItemMutationHookResult = ReturnType<typeof useMoveItemMutation>;
export type MoveItemMutationResult = Apollo.MutationResult<MoveItemMutation>;
export type MoveItemMutationOptions = Apollo.BaseMutationOptions<MoveItemMutation, MoveItemMutationVariables>;
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
export const RemoveItemDocument = gql`
    mutation removeItem($input: ActionItemInput!) {
  removeItem(input: $input) {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;
export type RemoveItemMutationFn = Apollo.MutationFunction<RemoveItemMutation, RemoveItemMutationVariables>;

/**
 * __useRemoveItemMutation__
 *
 * To run a mutation, you first call `useRemoveItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeItemMutation, { data, loading, error }] = useRemoveItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveItemMutation(baseOptions?: Apollo.MutationHookOptions<RemoveItemMutation, RemoveItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveItemMutation, RemoveItemMutationVariables>(RemoveItemDocument, options);
      }
export type RemoveItemMutationHookResult = ReturnType<typeof useRemoveItemMutation>;
export type RemoveItemMutationResult = Apollo.MutationResult<RemoveItemMutation>;
export type RemoveItemMutationOptions = Apollo.BaseMutationOptions<RemoveItemMutation, RemoveItemMutationVariables>;
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
export const ItemTagsDocument = gql`
    query ItemTags {
  itemTags {
    ...RegularItemTag
  }
}
    ${RegularItemTagFragmentDoc}`;

/**
 * __useItemTagsQuery__
 *
 * To run a query within a React component, call `useItemTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useItemTagsQuery(baseOptions?: Apollo.QueryHookOptions<ItemTagsQuery, ItemTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemTagsQuery, ItemTagsQueryVariables>(ItemTagsDocument, options);
      }
export function useItemTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemTagsQuery, ItemTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemTagsQuery, ItemTagsQueryVariables>(ItemTagsDocument, options);
        }
export type ItemTagsQueryHookResult = ReturnType<typeof useItemTagsQuery>;
export type ItemTagsLazyQueryHookResult = ReturnType<typeof useItemTagsLazyQuery>;
export type ItemTagsQueryResult = Apollo.QueryResult<ItemTagsQuery, ItemTagsQueryVariables>;
export const ItemsDocument = gql`
    query Items($input: ItemsInput) {
  items(input: $input) {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;

/**
 * __useItemsQuery__
 *
 * To run a query within a React component, call `useItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useItemsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useItemsQuery(baseOptions?: Apollo.QueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
      }
export function useItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ItemsQuery, ItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ItemsQuery, ItemsQueryVariables>(ItemsDocument, options);
        }
export type ItemsQueryHookResult = ReturnType<typeof useItemsQuery>;
export type ItemsLazyQueryHookResult = ReturnType<typeof useItemsLazyQuery>;
export type ItemsQueryResult = Apollo.QueryResult<ItemsQuery, ItemsQueryVariables>;
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
    query Nearby {
  nearby {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;

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
 *   },
 * });
 */
export function useNearbyQuery(baseOptions?: Apollo.QueryHookOptions<NearbyQuery, NearbyQueryVariables>) {
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
    query Popular {
  popular {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;

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
 *   },
 * });
 */
export function usePopularQuery(baseOptions?: Apollo.QueryHookOptions<PopularQuery, PopularQueryVariables>) {
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
export const VisitedDocument = gql`
    query Visited {
  visited {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;

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
 *   },
 * });
 */
export function useVisitedQuery(baseOptions?: Apollo.QueryHookOptions<VisitedQuery, VisitedQueryVariables>) {
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
    query Wanted {
  wanted {
    ...RegularItem
  }
}
    ${RegularItemFragmentDoc}`;

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
 *   },
 * });
 */
export function useWantedQuery(baseOptions?: Apollo.QueryHookOptions<WantedQuery, WantedQueryVariables>) {
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