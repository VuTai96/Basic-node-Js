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
module.exports = {
    getHomePage,
    getDetailPage
}