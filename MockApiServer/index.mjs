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

const typeDefs = mergeTypeDefs(typesArray);

const schema = makeExecutableSchema({ typeDefs});

const mockedSchema = addMocksToSchema({
    schema,
    mocks
  }); 

export const mockServer = new ApolloServer({
  schema: mockedSchema,
});

const { url } = await startStandaloneServer(mockServer,{listen: { port: 4000 }});

console.log(`Mock API Server started at ${url}`);