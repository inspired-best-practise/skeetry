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

export type Auth = {
  __typename?: 'Auth';
  /** JWT access token */
  accessToken: Scalars['String'];
  /** JWT refresh token */
  refreshToken: Scalars['String'];
  user: User;
};

export type CreateItemInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  flag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos: Scalars['String'];
  tags: ItemTag;
  type: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type ItemTag = {
  __typename?: 'ItemTag';
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  emoji: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  login: Auth;
  refreshToken: Token;
  removeItem: Item;
  signup: Auth;
  updateItem: Item;
};


export type MutationCreateItemArgs = {
  createItemInput: CreateItemInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveItemArgs = {
  id: Scalars['Int'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUpdateItemArgs = {
  updateItemInput: UpdateItemInput;
};

export type Query = {
  __typename?: 'Query';
  countries: Array<Item>;
  item: Item;
  items: Array<Item>;
  me: User;
};


export type QueryItemArgs = {
  id: Scalars['Int'];
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

export type UpdateItemInput = {
  /** Example field (placeholder) */
  exampleField?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  phone: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type RegularCountryFragment = { __typename?: 'Item', id: string, name: string, flag?: Maybe<string> };

export type RegularUserFragment = { __typename?: 'User', id: string, phone: string, username: string, avatar: string, createdAt: any, updatedAt: any };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar: string, createdAt: any, updatedAt: any } } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'Token', accessToken: string, refreshToken: string } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'Auth', accessToken: string, refreshToken: string, user: { __typename?: 'User', id: string, phone: string, username: string, avatar: string, createdAt: any, updatedAt: any } } };

export type CountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Item', id: string, name: string, flag?: Maybe<string> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, phone: string, username: string, avatar: string, createdAt: any, updatedAt: any } };

export const RegularCountryFragmentDoc = gql`
    fragment RegularCountry on Item {
  id
  name
  flag
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  phone
  username
  avatar
  createdAt
  updatedAt
}
    `;
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