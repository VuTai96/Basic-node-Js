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
module.exports = {
    getHomePage,
    getDetailPage,
    creatNewUser
}