const mongoose = require('mongoose');
const dbConnection = async ()=>{
        try{
            mongoose.connect(process.env.MONGO_URL)
        }catch{
            console.log(error)
        }
}

module.exports = {dbConnection};
