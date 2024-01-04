# Books API Example

Inspired by [Scott Moss' API course](https://frontendmasters.com/courses/api-design-nodejs-v4/)

## Develop the easy way

```shell
docker-compose up -d
```
- Creates and starts a database container, runs the migrations
- API will be available at `http://localhost:3000`
- Prisma Studio (database UI) will be available at `http://localhost:5555`

## Develop the slightly harder way

- Stand up the db `./data-scripts/setup.sh`
- Copy `.env.example` to `.env` and fill in the values (get missing values from container setup script)
- Update the database `./data-scripts/update-db.sh`
- Start the server `npm run dev`
