# Database

## 1. Sqlite

::: tip Applicable version

`>=3.4.1`

:::

![sqlite-navicat](/dev/database/sqlite-navcat.png)

## 2. PgLite

::: tip Applicable version

`>3.3.7 & <=3.4.1`

:::

### 2.1. Start service

1. cd dev path
2. Enable node environment: cmd execute `node`
3. Execute script

   ```js:line-numbers
   const { PGlite } = await import("@electric-sql/pglite");
   const { createServer } = await import("pglite-server");

   const start = async () => {
     // Connect to the database, the database address is your own physical address
     const db = new PGlite('/Users/HiramWong/Library/Application\ Support/zyfun/database');
     await db.waitReady;
     const PORT = 5432;
     const pgServer = createServer(db);
     pgServer.listen(PORT, () => {
       console.log(`Server bound to port ${PORT}`);
     });
   }

   start();
   ```

![pglite-cmd](/dev/database/pglite-cmd.png)

### 2.2. Connection

> Follow `Navicat`

![pglite-navicat](/dev/database/pglite-navcat.png)
