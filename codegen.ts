import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/Api/Models/**/!(*.generated).graphql",
  documents: "src/**/!(*.generated).{ts,tsx}",
  generates: {
    "src/Api/Models/types.generated.ts": {
      plugins: ["typescript"],
    },
  },
  ignoreNoDocuments: true,
};


export default config;



