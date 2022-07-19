import express from 'express';
import homeController from '../controller/homeController';

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage)

    router.get('/Detail/:userID', homeController.getDetailPage)

    router.post('/create-new-user', homeController.creatNewUser)

    router.post('/delete-user', homeController.deleteUser)

    router.get('/edit-user/:id', homeController.getEditUser)

    router.post('/update-user', homeController.postUpdateUser)

    router.get('/about', (req, res) => {
        res.send(`I'm TaiVu!`)
    })
    return app.use('/', router)
}

export default initWebRoute;