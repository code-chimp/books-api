#!/usr/bin/env bash

if [ -z "$1" ]; then
    echo "Usage: $0 <migration-name>"
    exit 1
fi

npx prisma migrate dev --name $1
