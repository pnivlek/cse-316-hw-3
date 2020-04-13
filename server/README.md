# goLogoLo Server

Using Express and MongoDB, with a GraphQL API.

## Example Queries:

**Creating a new logo**

```graphql
mutation addLogo($text: String!, $color: String!, $fontSize: Int!, $backgroundColor: String!, $borderColor: String!, $borderRadius: Int!, $borderWidth: Int!, $padding: Int!, $margin: Int!) {
  addLogo(text: $text, color: $color, fontSize: $fontSize, backgroundColor: $backgroundColor, borderColor: $borderColor, borderRadius: $borderRadius, borderWidth: $borderWidth, padding: $padding, margin: $margin) {
    _id
  }
}
{
    {
        "text": "Testing",
        "color": "#00000",
        "fontSize": 12,
        "backgroundColor": "#2c2c2c",
        "borderColor": "#bcbcbc",
        "borderRadius": 5,
        "borderWidth": 2,
        "padding": 2,
        "margin": 2
    }
}
```

Returns

```json
{
  "data": {
    "addLogo": {
      "_id": "YourIDHere"
    }
  }
}
```

**Updating a logo**

```graphql
mutation updateLogo($id: String!, $text: String!, $color: String!, $fontSize: Int!, $backgroundColor: String!, $borderColor: String!, $borderRadius: Int!, $borderWidth: Int!, $padding: Int!, $margin: Int!) {
  updateLogo(id: $id, text: $text, color: $color, fontSize: $fontSize, backgroundColor: $backgroundColor, borderColor: $borderColor, borderRadius: $borderRadius, borderWidth: $borderWidth, padding: $padding, margin: $margin) {
    _id
    lastUpdate
  }
}
{
  "id": "YourIDHere",
  "text": "Testing",
  "color": "#FFFFFF",
  "fontSize": 24,
  "backgroundColor": "#2c2c2c",
  "borderColor": "#bcbcbc",
  "borderRadius": 8,
  "borderWidth": 12,
  "padding": 12,
  "margin": 12
}
```

Returns

```json
{
  "data": {
    "updateLogo": {
      "_id": "YourIDHere",
      "lastUpdate": "2020-04-13T23:00:47.960Z"
    }
  }
}
```

**Getting a Logo**

```graphql
query getLogo($_id: String!) {
  logo(id: $_id) {
    text
    color
    fontSize
    backgroundColor
    borderColor
    borderRadius
    borderWidth
    padding
    margin
    lastUpdate
  }
}
{
  "_id": "YourIDHere"
}
```

Returns

```json
{
  "data": {
    "logo": {
      "text": "Testing",
      "color": "#FFFFFF",
      "fontSize": 24,
      "backgroundColor": "#2c2c2c",
      "borderColor": "#bcbcbc",
      "borderRadius": 8,
      "borderWidth": 12,
      "padding": 12,
      "margin": 12,
      "lastUpdate": "2020-04-13T23:05:56.911Z"
    }
  }
}
```

**Querying All Logos**

```graphql
query listLogos {
  logos {
    _id
    text
  }
}
```

Returns

```json
{
  "data": {
    "logos": [
      {
        "_id": "YourIDHere",
        "text": "Testing"
      }
    ]
  }
}
```
