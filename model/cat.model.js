const {Schema,model} = require("mongoose");

const catSchema = new Schema({
    name:String,
    breed:{
        type:String,enum:["Indian","British"],default:"Indian"
    }
},
{
    timestampss:true,
    toJSON:{virtuals:true}
})


catSchema.virtual("catWithBreed").get(function(){
    return this.name + ' ' + ' is a ' + this.breed + " "+ "breed"
})
const Cat = model("cat",catSchema)

module.exports = Cat;