const {Schema,model} = require("mongoose");


const schoolSchema = new Schema({
    name:String,
    address:[
        {
            place:String,
            state:String,
            country:String
        }

    ]
},{timeseries:true})

const School = model("school",schoolSchema);

module.exports = School;