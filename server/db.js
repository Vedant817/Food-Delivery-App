const mongoose = require('mongoose')
const MongoURI='mongodb+srv://vedantmahajan271:0ShkGza6RIxBuCN3@food.hsgsdgt.mongodb.net/FoodAppData?retryWrites=true&w=majority'

const MongoDB = async ()=>{
    await mongoose.connect(MongoURI,{useNewUrlParser: true},(error,success)=>{
        if(error) console.log(error);
        else{
            console.log('Database Connected',success);
            const fetchedData =mongoose.connection.db.collection('Food Data');
            fetchedData.find({}).toArray(function(err,data){
                if(err) console.log(err);
                else{
                    // console.log(data);
                }
            })
        }
    });
}


module.exports = MongoDB();