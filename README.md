
# Nodejs Authentication with JWT Example

Nodejs Authentication with JWT Example

## TODO

- [ ] Better Status Codes
- [ ] Better Responses
- [ ] Authentication Middleware
- [ ] Comments
- [ ] Tests

## Installation & Usage

- Clone this repository

- Install with npm

```bash
  npm install
  cd my-project
```

- Rename .env.example to .env and fill the environment variables

- Run the sever

```bash
  npm start
```

## API Reference

### Get all users

Returns all users

```http
  GET /api/v1/user
```

### Get user

Return a user

```http
  GET /api/v1/user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

### Register user

```http
  POST /api/v1/user/register
```

Register a new user, returns id, username and token

| Body      | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `username`| `string` | **Required**. Username of the new user|
| `email`   | `string` | **Required**. Email of the new user   |
| `password`| `string` | **Required**. Password of the new user|

### Login user

```http
  POST /api/v1/user/login
```

Login a user, returns id, username and token

| Body      | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`| `string` | **Required**. Username of the user|
| `password`| `string` | **Required**. Password of the user|

### Protected route

```http
  POST /api/v1/user/protected
```

Protected route for logged in users, return logged user data and a message

| Body   | Type     | Description              |
| :----- | :------- | :----------------------- |
| `Token`| `string` | **Required**. Valid token|
  
## Author

- [@JorgeMayoral](https://www.github.com/JorgeMayoral)

## License

[MIT](https://choosealicense.com/licenses/mit/)
