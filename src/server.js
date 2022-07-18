import express from 'express';
import configViewEngine from './configs/viewEngine';
import 'dotenv/config';
import initWebRoute from './route/web';
//import connection from './configs/connectDB';


const app = express();
const port = process.env.PORT || 8080;
//console.log('>>>Check port', port)

//setup view engine
configViewEngine(app);
//init web router
initWebRoute(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

