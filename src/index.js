import { resolvers } from "./graphql/resolvers.js";
import { typeDefinitions } from "./graphql/typeDefs.js";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers: resolvers,
});

server.listen().then(({ url }) => {
  console.log("Server listening at " + url);
});
