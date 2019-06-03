const mongoose = require('mongoose')
const Schema = mongoose.Schema

let eventSchema = new Schema({
        id: { type: Number, required: true },
        user: {type:Number, required:true},
        // user: [{id:{type:Number,required:true}},{name:{type:String,required:true}}],
        category: { type: String, required: true },
        title: { type: String, required: true },
        location: { type: String, required: true },
        date: { type: Date, default: Date.now },
        time: { type: String, required:true },
        attendees: { type: String }
    },
    {
        collection: 'event'
    })
const Event = mongoose.model('Event', eventSchema)

module.exports = Event


