import * as Types from './graphql';

import * as Operations from './graphql';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import { getApolloClient} from '../withApollo';
import type { NormalizedCacheObject } from '@apollo/client';
export async function getServerPageGetProyeks
    (options: Omit<Apollo.QueryOptions<Types.GetProyeksQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetProyeksQuery>({ ...options, query:Operations.GetProyeksDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetProyeks = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetProyeksQuery, Types.GetProyeksQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetProyeksDocument, options);
};
export type PageGetProyeksComp = React.FC<{data?: Types.GetProyeksQuery, error?: Apollo.ApolloError, loading?: boolean}>;
export const withPageGetProyeks = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetProyeksQuery, Types.GetProyeksQueryVariables>) => (WrappedComponent:PageGetProyeksComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error, loading } = useQuery(Operations.GetProyeksDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} loading={loading}/> ;
                   
            }; 
export const ssrGetProyeks = {
      getServerPage: getServerPageGetProyeks,
      withPage: withPageGetProyeks,
      usePage: useGetProyeks,
    }
export async function getServerPageGetUserProyek
    (options: Omit<Apollo.QueryOptions<Types.GetUserProyekQueryVariables>, 'query'>, ctx? :any ){
        const apolloClient = getApolloClient(ctx);
        
        const data = await apolloClient.query<Types.GetUserProyekQuery>({ ...options, query:Operations.GetUserProyekDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const useGetUserProyek = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserProyekQuery, Types.GetUserProyekQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(Operations.GetUserProyekDocument, options);
};
export type PageGetUserProyekComp = React.FC<{data?: Types.GetUserProyekQuery, error?: Apollo.ApolloError, loading?: boolean}>;
export const withPageGetUserProyek = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<Types.GetUserProyekQuery, Types.GetUserProyekQueryVariables>) => (WrappedComponent:PageGetUserProyekComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error, loading } = useQuery(Operations.GetUserProyekDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} loading={loading}/> ;
                   
            }; 
export const ssrGetUserProyek = {
      getServerPage: getServerPageGetUserProyek,
      withPage: withPageGetUserProyek,
      usePage: useGetUserProyek,
    }