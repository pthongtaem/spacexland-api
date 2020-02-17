import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createComplexityLimitRule } from 'graphql-validation-complexity';

export default (app, { schema, context }) => {
  const graphql = new ApolloServer({
    schema,
    context,
    engine: {
      apiKey: process.env.ENGINE_API_KEY,
    },
    validationRules: [depthLimit(10), createComplexityLimitRule(1000)],
    introspection: true,
  });

  graphql.applyMiddleware({
    app,
  });
};
