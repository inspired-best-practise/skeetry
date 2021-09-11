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

export type Item = {
  __typename?: 'Item';
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
  userVisited: Array<User>;
  userWanted: Array<User>;
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
  login: Auth;
  moveItem: Item;
  refreshToken: Token;
  removeItem: Item;
  signup: Auth;
};


export type MutationAddItemArgs = {
  input: ActionItemInput;
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


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  countries: Array<Item>;
  items: Array<Item>;
  me: User;
  visited: Array<Item>;
  wanted: Array<Item>;
};

export type SignupInput = {
  password: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
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

export type RegularCountryFragment = { __typename?: 'Item', id: string, name: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> };

export type RegularItemFragment = { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> };

export type RegularItemLocalizationFragment = { __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> };

export type RegularUserFragment = { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any };

export type AddItemMutationVariables = Exact<{
  input: ActionItemInput;
}>;


export type AddItemMutation = { __typename?: 'Mutation', addItem: { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type MoveItemMutationVariables = Exact<{
  input: ActionItemInput;
}>;


export type MoveItemMutation = { __typename?: 'Mutation', moveItem: { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type RemoveItemMutationVariables = Exact<{
  input: ActionItemInput;
}>;


export type RemoveItemMutation = { __typename?: 'Mutation', removeItem: { __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } } };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Item', id: string, name: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any } };

export type VisitedQueryVariables = Exact<{ [key: string]: never; }>;


export type VisitedQuery = { __typename?: 'Query', visited: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

export type WantedQueryVariables = Exact<{ [key: string]: never; }>;


export type WantedQuery = { __typename?: 'Query', wanted: Array<{ __typename?: 'Item', id: string, type: string, name: string, overview?: Maybe<string>, wantedCount: number, visitedCount: number, reviewsCount: number, photos: Array<string>, latitude: string, longitude: string, flag?: Maybe<string>, locale: Locale, userWanted: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, userVisited: Array<{ __typename?: 'User', id: string, phone: string, username: string, avatar?: Maybe<string>, wantedCount: number, visitedCount: number, createdAt: any, updatedAt: any }>, localizations?: Maybe<Array<{ __typename?: 'ItemLocalization', id: string, locale: Locale, name: string, overview?: Maybe<string> }>> }> };

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
export const RegularItemLocalizationFragmentDoc = gql`
    fragment RegularItemLocalization on ItemLocalization {
  id
  locale
  name
  overview
}
    `;
export const RegularCountryFragmentDoc = gql`
    fragment RegularCountry on Item {
  id
  name
  flag
  locale
  userWanted {
    ...RegularUser
  }
  userVisited {
    ...RegularUser
  }
  localizations {
    ...RegularItemLocalization
  }
}
    ${RegularUserFragmentDoc}
${RegularItemLocalizationFragmentDoc}`;
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
  flag
  locale
  userWanted {
    ...RegularUser
  }
  userVisited {
    ...RegularUser
  }
  localizations {
    ...RegularItemLocalization
  }
}
    ${RegularUserFragmentDoc}
${RegularItemLocalizationFragmentDoc}`;
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
export const CountriesDocument = gql`
    query Countries {
  countries {
    ...RegularCountry
  }
}
    ${RegularCountryFragmentDoc}`;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: Apollo.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
      }
export function useCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, options);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesQueryResult = Apollo.QueryResult<CountriesQuery, CountriesQueryVariables>;
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