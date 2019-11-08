import { gql } from 'apollo-server-express';

// A schema is a collection of type definitions (hence "typeDefs") that
// together define the "shape" of queries that are executed against your data.
export const typeDefs = gql`
  schema {
    query: RootQuery
    mutation: RootMutation
  }

  # The schema allows the following queries:
  type RootQuery {
    " Retrieve a Age Prediction by a given name (and country) "
    agePrediction(name: String, country: String): AgePredictionResponse
  }

  # The schema allows the following mutations:
  type RootMutation {
    " Creates age prediction for multiple names at a time "
    createBatchPrediction(input: CreateBatchPredictionInput): BatchPredictionResponse
  }

  # RootQuery.agePrediction
  type AgePredictionResponse {
    date: String
    predictionDetails: PredictionDetails
  }
  type PredictionDetails {
    name: String
    count: Int
    country: String
    age: Int
  }

  # RootMutation.createBatchPrediction
  input CreateBatchPredictionInput {
    names: [String]
  }
  type BatchPredictionDetails {
    name: String
    count: Int
    age: Int
  }
  type BatchPredictionResponse {
    date: String
    predictionDetails: [BatchPredictionDetails]
  }
`;
