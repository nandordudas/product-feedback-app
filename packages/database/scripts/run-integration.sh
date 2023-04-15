#!/usr/bin/env bash

DIR="$(cd "$(dirname "$0")" && pwd)"

docker-compose up -d
echo '🟡 Waiting for database to be ready...'
wait4x postgresql "${DATABASE_URL}"
echo '🟢 Database is ready!'
npx prisma migrate dev --name init
