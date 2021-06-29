
# Nodejs Authentication with JWT Example

Nodejs Authentication with JWT Example

## TODO

- [ ] Better Status Codes
- [ ] Better Responses
- [x] Authentication Middleware
- [ ] Comments
- [ ] Tests

## Installation & Usage

- Clone this repository

- Install with npm

```bash
  cd nodejs-jwt-example
  npm install
```

- Rename .env.example to .env and fill the environment variables. Example:

```javascript
  JWT_SECRET_KEY="JWT_SECRET_KEY"
  PORT=5000
```

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
  GET /api/v1/user/protected
```

Protected route for logged in users, return logged user data and a message

| Headers         | Type     | Description                                             | Example          |
| :-------------- | :------- | :------------------------------------------------------ | :--------------- |
| `Authentication`| `string` | **Required**. Valid token preceded by the word 'Bearer' | `Bearer <token>` |
  
## Author

- [@JorgeMayoral](https://www.github.com/JorgeMayoral)

## License

[MIT](https://choosealicense.com/licenses/mit/)
