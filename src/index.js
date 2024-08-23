const express = require('express');
 const {PORT, email} = require('./config/server.config');
const homePingController = require('./controllers/home.controller');
const router = require('./routes');
const customroute = require('./routes/custom.route');

const app = express();

app.use(router);
app.use(customroute);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ${email}`);
});
