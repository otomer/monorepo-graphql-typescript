## GraphQL query examples

### Create batch age prediction

```
mutation {
  createBatchPrediction(
    input: {
      names: [
        "Alice"
        "Bob"
      ]
    }
  ) {
    date
    predictionDetails {
      age
      name
      count
    }
  }
}
```
 

### Retrieve age prediction by name (and country)
```
{
  agePrediction(name: "Bob", country: "IL") {
    date
    predictionDetails {
      name
      count
      age
      country
    }
  }
}
```
