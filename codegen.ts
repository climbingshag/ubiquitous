import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "MockApiServer/Schemas/**/!(*.generated).graphql",
  documents: "src/**/!(*.generated).{ts,tsx}",
  generates: {
    "src/Api/types.generated.ts": {
      plugins: ["typescript"],
    },
  },
  ignoreNoDocuments: true,
};


export default config;



