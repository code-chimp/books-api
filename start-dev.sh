#!/bin/bash

# sync database
npx prisma db push

# wait for database to be ready
sleep 15

# start devloper
npm run dev &
npx prisma studio &

wait -n
exit $?
