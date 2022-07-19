import pool from "../configs/connectDB";

const getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return res.render('index.ejs', { dataUser: rows })
}

const getDetailPage = async (req, res) => {
    let id = req.params.userID;
    console.log(id)
    const [rows, fields] = await pool.execute('SELECT * FROM `user` WHERE `id` = ?', [id]);
    return res.send(JSON.stringify(rows))
}

const creatNewUser = async (req, res) => {
    console.log('>>>check req.body:', req.body)
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO user (firstName, lastName, email, address) VALUES (?,?,?,?)',
        [firstName, lastName, email, address])
    return res.redirect('/')
}
const deleteUser = async (req, res) => {
    let userID = req.body.userID;
    await pool.execute('DELETE FROM user WHERE id=?', [userID])
    return res.redirect('/')
}
const getEditUser = async (req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from user where id=?', [id])
    return res.render('update.ejs', { dataUser: user[0] })
}
const postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('update user set firstName=?, lastName=?, email=?, address=? where id=?',
        [firstName, lastName, email, address, id])
    return res.redirect('/')
}
module.exports = {
    getHomePage,
    getDetailPage,
    creatNewUser,
    deleteUser,
    getEditUser,
    postUpdateUser
}