const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const leaderSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        require: false,
        default: ''
    },
    description: {
        type: String,
        require: true,
    },
    featured: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;
