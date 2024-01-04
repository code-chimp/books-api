#!/usr/bin/env pwsh

param(
    [string]$migrationName = $(throw "Usage: add-migration.ps1 <migrationName>")
)

npx prisma migrate dev --name $migrationName
