import connection from "../configs/connectDB";

const getHomePage = (req, res) => {
    let data = [];
    connection.execute(
        'SELECT * FROM `user`',
        function (err, results, fields) {
            data = results;
            console.log('checkleng: =', JSON.stringify(data).length)
            //console.log('>>>check results: ', results)
            //console.log('>>>check data: ', data)
            //console.log('>>>check data: ', JSON.stringify(data))
            // console.log('>>> Check mysql: ')
            // console.log(results); // results contains rows returned by server
            // console.log('>>> results1: ', results[0]); // results contains rows returned by server

            //console.log(fields); // fields contains extra meta data about results, if available

            // If you execute same statement again, it will be picked from a LRU cache
            // which will save query preparation time and give better performance
            return res.render('index.ejs', { dataUser: data })
        }
    );
}
module.exports = {
    getHomePage
}