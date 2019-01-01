## UPDATE - 1
Included in the server folder is a sql file which you can import using phpmyadmin. The file is located in config folder. The database name in the sql file is `andri` but the database I am using is `dv259321_inventory`, so don't forget to change it in the config file.

The database `dv259321_inventory` contain many tables which are not necessary for this one.

## REST API

There's nothing fancy with this rest server, which require the following:
1. Local MySQL Server with XAMPP
2. Please create the database first before running the server with the following property:
`user: 'andri', password: '123', database: 'dv259321_inventory'`
3. Or you can define your own database configuration however you like it, it's located in the following folder: `server/config/config-MySQL.js`
4. Install nodemon as global `npm install -g nodemon`
5. If you already clone it, `cd` into `server` folder and then run `npm install` or `yarn`
6. Then run `npm start` or `yarn start`
7. API Server will run on [http://localhost:5001](http://localhost:5001)

There's still some bugs in performing Update method; it crashes with the query syntax error.
Otherwise, all the basic Create, Read and Delete works fine. I haven't implemented proper validation on the server; it's all done on the front end. 