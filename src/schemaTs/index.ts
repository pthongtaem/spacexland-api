// import { makeExecutableSchema } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import {
  makeRemoteExecutableSchema,
  introspectSchema,
  mergeSchemas,
} from 'graphql-tools';
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';
import { CapsuleResolver } from './capsule';
import { CompanyResolver } from './company';
import { CoreResolver } from './core';
import { DragonResolver } from './dragon';
import { GraphQLSchema } from 'graphql';

// const uri = process.env.X_HASURA_URL;
// const headers = {
//   'x-hasura-admin-secret': process.env.X_HASURA_ADMIN_SECRET,
// };

// const link = new HttpLink({
//   uri,
//   headers,
//   fetch,
// });

export default async (): Promise<GraphQLSchema> => {
  // const remoteSchema = makeRemoteExecutableSchema({
  //   schema: await introspectSchema(link),
  //   link,
  // });

  const localSchema = await buildSchema({
    resolvers: [CapsuleResolver, CompanyResolver, CoreResolver, DragonResolver],
  });

  const schema = mergeSchemas({
    schemas: [localSchema],
  });

  return schema;
};
