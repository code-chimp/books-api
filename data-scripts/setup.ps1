#!/usr/bin/env pwsh

# stand up a Postgres instance
docker run --name booksapi-pg_dev `
    -p 5488:5432 `
    -e "POSTGRES_PASSWORD=P4ssw0rd" `
    -d postgres:16
