import { ApolloServer, gql } from "apollo-server-azure-functions";

import { buildFederatedSchema } from "@apollo/federation";
import { ApolloServerPluginUsageReportingDisabled } from "apollo-server-core";
import { typeDefs, resolvers } from "./merge-packages";
import { dataSources } from "./data-sources/";

const server = new ApolloServer({
  schema: buildFederatedSchema({
    typeDefs,
    resolvers,
  }),
  dataSources,
  subscriptions: false,
  playground: {
    workspaceName: "SpaceAPI.dev - Astronaut Service",
    settings: {
      //@ts-ignore
      "schema.polling.enable": false,
      "tracing.hideTracingResponse": true,
      "queryPlan.hideQueryPlanResponse": true,
      "general.betaUpdates": true,
    },
  },
  plugins: [ApolloServerPluginUsageReportingDisabled()],
});

export const graphqlHandler = server.createHandler({
  cors: {
    origin: "*",
  },
});
