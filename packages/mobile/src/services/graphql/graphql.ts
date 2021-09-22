import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { PLATFORM } from '_app/constants';
import { getAccessToken } from '_app/stores';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === 'dev'
      ? PLATFORM.IS_ANDROID
        ? 'http://10.0.2.2:3000/graphql'
        : 'http://localhost:3000/graphql'
      : 'https://api.skeetry.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${getAccessToken()}`,
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache,
});
