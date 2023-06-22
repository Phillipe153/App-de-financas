const {app} = require('./app')
require('dotenv').config();

const PORT = process.env.MYSQL_PORT || 3008;


app.listen(PORT, () => console.log('ouvindo porta', PORT));