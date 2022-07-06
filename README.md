<h3 align="center">Express Rest API Starter</h3>

---

## About 

Nodejs REST API Starter built using Express, Mongoose, JsonWebToken
#### Register User

```http
  POST /auth/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your Name |
| `email` | `string` | **Required**. Your Email |
| `password` | `string` | **Required**. Password |

#### Login User

```http
  POST /auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.  |
| `password` | `string` | **Required**. |



#### Get All Post

```http
  get /posts/
```

#### Create Post

```http
  POST /post/
```


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**.    |
| `content` | `string` | **Required**.  |

#### Update Post

```http
  PATCH /post/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**.    |
| `content` | `string` | **Required**.  |


#### Delete Post

```http
  DELETE /post/:id
```

## Getting Started

### Prerequisites

Install:

- [NodeJs](https://nodejs.org/en/)
- [MongoDB](https://mongodb.com)

### Installing

1. Install dependencies

```
npm install
```

2. Copy & modify environment variables from .env.example to .env

```
cp .env.example .env
```

3. Make database named tugas

## Running the app <a name = "run"></a>

run:

```
npm start
```
## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - Database ODM
- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
