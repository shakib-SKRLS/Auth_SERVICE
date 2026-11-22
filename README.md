# Auth_SERVICE

An authentication service for the airline booking system — signup, sign-in, and token checks used by the API gateway and other services.

## Tech
- Node.js, Express 5
- MySQL with Sequelize and Sequelize CLI — `User` and `Role` models, with a roles seeder
- Password hashing with bcrypt, JWT with `jsonwebtoken`

## API endpoints
Base path: `/api/v1`.

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/api/v1/signup` | Create a user |
| POST | `/api/v1/signin` | Sign in and get a JWT |
| GET | `/api/v1/isauthenticated` | Check the `x-access-token` header |
| GET | `/api/v1/isadmin` | Check admin access |

## How to run
```bash
npm install
cp .env.example .env   # PORT (default 3000), JWT secret, and MySQL settings
npx sequelize-cli db:migrate
npm start
```

## License
MIT
