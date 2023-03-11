const Express = require('express')
const app = Express()
const port = 3306
const bodyParser = require('body-parser');

import cors from 'cors';
import routeruser from './routes/user_route';



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


app.use(cors())
app.use(bodyParser.json());
app.use(Express.json());
app.use('/user', routeruser);

