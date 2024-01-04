# In-progress

## TODO

- [x] Simplified book publisher example schema
- [x] Script db interactions
- [x] Alternate Docker Compose setup
- [ ] Strong typings
- [ ] Publisher endpoints
- [ ] Author endpoints
- [ ] Book endpoints
- [ ] Testing strategy
- [ ] Test Coverage
- [ ] Upgrade Dockerfile with dev/prod targets
- [ ] Auto-generate OpenAPI/Swagger docs(?)
  - Not **tsoa** - a bit too restrictive for my tastes
  - Not **swagger-jsdoc** - too much manual work (basically writing the YAML in jsdoc comments)

## Rough kick-off

```shell
npm i express express-validator morgan bcrypt dotenv jsonwebtoken
npm i -D typescript ts-node nodemon prettier prisma jest ts-jest supertest @types/bcrypt @types/jest @types/node
npx typesync
npm install

npx prisma init --datasource-provider postgresql
```
