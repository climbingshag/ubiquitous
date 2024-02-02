import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import { addMocksToSchema } from "@graphql-tools/mock";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mocks } from "./mocks.mjs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, '../src/Api/Models/**/*.graphql'))

// const listTypeDefs = await loadFiles("../src/Api/Models/List/List.graphql");
// const taskTypeDefs = await loadFiles("../Models/Task/Task.graphql");
// const userTypeDefs = await loadFiles("../Models/User/User.graphql");

const typeDefs = mergeTypeDefs(typesArray);

const schema = makeExecutableSchema({ typeDefs});

const mockedSchema = addMocksToSchema({
    schema,
    mocks
  }); 

export const mockServer = new ApolloServer({
  // addMocksToSchema accepts a schema instance and provides
  // mocked data for each field in the schema
  schema: mockedSchema,
});

const { url } = await startStandaloneServer(mockServer);

console.log(`Mock API Server started at ${url}`);