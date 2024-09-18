const mongoose = require('mongoose');

const DBconncetion = () => {
    mongoose.connect(process.env.DB_URL).then((con)=>{
        console.log(`Database connected to Host : ${con.connection.host}`)
    })
}

module.exports = DBconncetion;
