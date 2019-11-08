import { ApolloServer } from 'apollo-server-express';
import chalk from 'chalk';
import consoleStamp from 'console-stamp';
import express from 'express';
import { resolvers, typeDefs } from './schema';

consoleStamp(console);
const app = express();
const appOptions = {
  port: 4000,
};

// Setup ApolloServer with schema definition and a set of resolvers.
const apolloServer = new ApolloServer({
  engine: {
    // The Graph Manager API key
    apiKey: 'service:myservice:BTdhQYpGTs3qKSaW3YlGeA',
    // If set, prints all reports as JSON when they are sent.
    // debugPrintReports: true,
    // A tag for this specific environment (e.g. `development` or `production`).
    // For more information on schema tags/variants, see
    // https://www.apollographql.com/docs/platform/schema-registry/#associating-metrics-with-a-variant
    schemaTag: 'development',
  },
  introspection: true,
  playground: {
    settings: {
      'editor.cursorShape': 'line',
      'editor.theme': 'dark',
    },
  },
  resolvers,
  typeDefs,
  formatError: error => {
    // eslint-disable-next-line no-console
    console.log(error);
    return error;
  },
});

apolloServer.applyMiddleware({ app });

app.get('/', (req, res) =>
  res.send(
    `🔥 Server is running in <b>${app.settings.env}</b> mode...<br/>📈
            <a href="/graphql">View GraphQL server</a>`,
  ),
);

// Launch the web server.
app.listen(appOptions, () => {
  const url = `http://localhost:${appOptions.port}${apolloServer.graphqlPath}`;
  // eslint-disable-next-line no-console
  console.log(chalk.green(`🚀 Apollo server ready at ${url} [${app.settings.env}]`));
});
