import pool from "../configs/connectDB"

const getAllUsers = async (req, res) => {
    const [rows, feild] = await pool.execute('select * from user')
    return res.status(200).json({
        message: 'ok',
        data: rows
    })
}
const createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body;
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing require'
        })
    }
    await pool.execute('INSERT INTO user (firstName, lastName, email, address) VALUES (?,?,?,?)',
        [firstName, lastName, email, address])
    return res.status(200).json({
        message: 'ok'
    })
}
const updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing require'
        })
    }
    await pool.execute('update user set firstName=?, lastName=?, email=?, address=? where id=?',
        [firstName, lastName, email, address, id])
    return res.status(200).json({
        message: 'ok'
    })
}
const deleteUser = async (req, res) => {
    let userID = req.params.id;
    if (!userID) {
        return res.status(200).json({
            message: 'missing require'
        })
    }
    await pool.execute('DELETE FROM user WHERE id=?', [userID])
    return res.status(200).json({
        message: 'ok'
    })
}
module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}