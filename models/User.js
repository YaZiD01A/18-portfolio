const {Schema, model} = require ("mongoose")

const userInfo = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },

        email: {
            type: String,
            unique: true,
            required: true,
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },

    {
        toJSON: {
            virtuals: true
        }
    }
)

userInfo.virtual ("friendCount").get (()=> {
    return this.friends.length
})

const User = model ("User", userInfo)

module.export = User