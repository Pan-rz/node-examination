const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 解析 application/json
app.use(bodyParser.json({ limit: '50mb' })); 
// 解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '80mb' }));

app.get('/', (req, res) => {
    res.json({"message": "Building a RESTful CRUD API with Node.js, Express/Koa and MongoDB."});
});

require('./database.js')();
require('./routers/get.js')(app);
require('./routers/post.js')(app);
require('./routers/put.js')(app);
require('./routers/delete.js')(app);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});