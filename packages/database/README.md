# Prisma client

Add `DATABASE_URL` environment variable like

```ini
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

```bash
npx prisma init --datasource-provider postgresql
npx prisma migrate dev --name init
npx prisma generate
```
