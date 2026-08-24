---
title: "About GraphQL"
url_path: developers_guide/about-graphql
surface: guide
---
# About GraphQL

GraphQL is an open-source query language for APIs that was developed by Facebook as an alternative to REST API. It was released to the public in 2015 and hosted by the Linux Foundation at [GraphQL.org](https://graphql.org/).

Using GraphQL, you can query, create, update, and delete data with mutations. Queries and mutations follow the same syntax. The following examples taken from [GraphQL.org](https://graphql.org/).org show how queries and mutations are sent to a GraphQL server that hosts information about Star Wars.

## Examples

### Example 1 - Query

**Query**

```
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

**Result**

```
{
  "data":{
    "hero":{
      "name":"R2-D2",
      "friends":[
        {
          "name":"Luke Skywalker"
        },
        {
          "name":"Han Solo"
        },
        {
          "name":"Leia Organa"
        }
      ]
    }
  }
}
```

### Example 2 - Mutation

**Mutation**

```
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}

Variables:
{
  "ep":"JEDI",
  "review":{
    "stars":5,
    "commentary":"This is a great movie!"
  }
}
```

**Result**

```
{
  "data":{
    "createReview":{
      "stars":5,
      "commentary":"This is a great movie!"
    }
  }
}
```

See this [Tutorial on GraphQL Queries and mutations](https://graphql.org/learn/queries/) for more information on Queries and mutations.

When the schema of the data is known, you can query for and change the information in the exact shape the data is organized and fetch only the data you need. In contrast, REST APIs respond with a predefined payload, regardless of whether you need all the information or not.

For more information on GraphQL, see:
- [How to GraphQL](https://www.howtographql.com/basics/0-introduction/)
- [Introduction to GraphQL](https://graphql.org/learn/)

The AEC Data Model API provides a unified interface by federating multiple services. For example, to work with Hubs, Projects, and Folders, you must use the APS Data Management REST API. AEC Data Model API, based on GraphQL service handles the interaction with Forge Data Management to provide you with a unified API experience.

---
원본 문서: https://aps.autodesk.com/en/docs/aecdatamodel/v1/developers_guide/about-graphql
