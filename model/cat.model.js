const {Schema,model} = require(mongoose);

const catSchema = new Schema({
    _id:Number,
    name:String,
    owner:[
        {
            owner:String
        }
    ]
})

const Cat = model("cat",catSchema)

module.exports = Cat;