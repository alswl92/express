import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './usersRoutes.js'

const app = express();
const port = 3001; 

app.use(bodyParser.json());
app.use(cors());

app.use('/', router);

app.get('/',(req,res) => res.send("hello from express"));
app.all("*", (req,res) => res.send("That route doesn't exist"));

app.listen(port, ()=> console.log(`server is listening on port ${port}`));