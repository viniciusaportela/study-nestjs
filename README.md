# study-nestjs

# 1. Gateway

## 1.1 REST API

### `POST` /v1/users

> creates a new user

payload
```json
{
	"name": "vinicius",
	"password": "81dc9bdb52d04dc20036dbd8313ed055",
	"level": "user"
}
```

### `POST` /v1/users/authenticate

payload
```json
{
	"name": "vinicius",
	"password": "81dc9bdb52d04dc20036dbd8313ed055"
}
```

response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmluaWNpdXMiLCJyb2xlcyI6InVzZXIiLCJpZCI6IjVmODExMGI5MjQ3NjViMzRjMDY3NzU0YSIsImlhdCI6MTYwMjQ2ODI5MH0.C7DXs8E2hTb39hakhiYG0JoNQir1pkYil4Fl_briEL8"
}
```

---

## 1.2 GraphQL

### 1.2.1 Types and enums

User:
```typescript
type User {
  _id: String!
  name: String!
  password: String!
  level: Roles!
}
```

AuthenticationToken:
```typescript
type AuthenticationToken {
  token: String
}
```

Roles:
```typescript
enum Roles {
  USER
  ADMIN
}
```

### 1.2.2 Queries

### User

> Get data from user

```typescript
query user(_id): User!
```

### 1.2.3 Mutations

### createUser

> Creates a new user

```typescript
mutation user(
  level: Roles,
  password: String!,
  name: String!
): User!
```

### authenticate

> Authenticate to system, retrieve your access token

```typescript
mutation authenticate(
  level: Roles,
  password: String!,
  name: String!
): AuthenticationToken!
```

# 2. User Microservice

## 2.1 Message Patterns

### create-user

> Creates a new user

data:

```typescript
{
  name: string;
  password: string; 
}
```

### authenticate-user

> Retrieve the access-token

data:

```typescript
{
  name: string;
  password: string; 
}
```

### get-user

> Get data from a specific user

data: 

```typescript
userId: string
```
