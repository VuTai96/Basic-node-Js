import express from 'express';
import configViewEngine from './configs/viewEngine';
import 'dotenv/config';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
//import connection from './configs/connectDB';


const app = express();
const port = process.env.PORT || 8080;
//console.log('>>>Check port', port)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setup view engine
configViewEngine(app);
//init web router
initWebRoute(app)
//
initAPIRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

