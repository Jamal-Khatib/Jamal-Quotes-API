const mongoose = require("mongoose") ; 

const Schema = mongoose.Schema ; 


const quoteSchema = new Schema(
    {
        type : String,
        name : String,
        content: String
    }, 
    {timestamps: true}
) ; 

const Quote = new mongoose.model("quote",quoteSchema)

module.exports = Quote ; 



