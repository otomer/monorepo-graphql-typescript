import { createBatchPrediction } from './resolvers/createBatchPrediction';
import { getAgePrediction } from './resolvers/getAgePrediction';

// Resolvers define the technique for fetching the types defined in the schema.
export const resolvers = {
  // Resolver example:
  // fieldName(root, args, context, info) { result }
  RootMutation: {
    createBatchPrediction: (root: any, { input }: { input: any }, context: any) => createBatchPrediction(input),
  },
  RootQuery: {
    agePrediction: (root: any, { country, name }: { name: string; country?: string }) =>
      getAgePrediction(name, country),
  },
};
