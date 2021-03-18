const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    document: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: false
    },
    prints:[
        {
            brand:{
                type: String,
                required: true
            },
            reference:{
                type:String,
                required: true
            },
            serial:{
                type:String,
                required: true,
                unique: true
            },
            works:[
                {
                    date:{
                        type: Date,
                        default: Date.now
                    },
                    description:{
                        type:String,
                        required:true
                    },
                    price:{
                        type:Number,
                        required:true
                    }
                }
            ]
        }
    ]
});

module.exports = mongoose.model('Customer', customerSchema);