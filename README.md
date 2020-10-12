# study-nestjs

# 1. Gateway

---

## 1.1 REST API

`POST` /v1/users

> creates user

---

### 1.2 GraphQL

###

### 1.2.1 Queries

### 1.2.1.1 User

```graphql
query user(_id) {
  _id
  name
  password
  level
}
```

### 1.2.2 Mutations

### 1.2.2.1 createUser

```graphql
mutation user(
  level: Roles,
  password: String!,
  name: String!
): User!
```

### 1.2.2.2 authenticate