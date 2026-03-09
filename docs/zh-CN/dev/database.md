# 数据库

## 1. Sqlite

::: tip 适用版本

`>=3.4.1`

:::

![sqlite-navicat](/dev/database/sqlite-navcat.png)

## 2. PgLite

::: tip 适用版本

`>3.3.7 & <=3.4.1`

:::

### 2.1. 启动服务

1. cd 开发目录
2. 启用node环境: cmd 执行 `node`
3. 执行脚本

   ```js:line-numbers
   const { PGlite } = await import("@electric-sql/pglite");
   const { createServer } = await import("pglite-server");

   const start = async () => {
     // 连接数据库, 数据库地址为自己实际地址
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

### 2.2. 管理工具连接

> 如下为 `Navicat`

![pglite-navicat](/dev/database/pglite-navcat.png)
