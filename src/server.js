import express from 'express';
import configViewEngine from './configs/viewEngine';
import 'dotenv/config';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
var morgan = require('morgan')
//import connection from './configs/connectDB';

//setup middleware and retun json data
const app = express();
const port = process.env.PORT || 8080;
//console.log('>>>Check port', port)

//logging file with morgan
app.use(morgan('combined'))
//midleware with next
app.use((req, res, next) => {
    //if(condition)-> return
    console.log(req.method)
    next()
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//setup view engine
configViewEngine(app);
//init web router
initWebRoute(app)
//init apo router
initAPIRoute(app)
//404 notfound standing middleware
app.use((req, res) => {
    return res.render('notfound.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

