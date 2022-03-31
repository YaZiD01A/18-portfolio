const {Schema, model} = require ("mongoose")
const reactionSchema = require ("./Reaction")

const thoughtInfo = new Schema (
    {
        thoughtText: {
            type: String,
            require: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,


        },

        username: {
            type: String,
            required: true
        },

        reactions: [reactionSchema]
    },

    {
        toJSON: {
            virtuals: true
        }
    }
)

thoughtInfo.virtual ("reactionCount").get (()=> {
    return this.reactions.length
})

const Thought = model ("Thought", thoughtInfo)


module.exports = Thought