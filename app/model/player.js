const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    name: { type: String },
    position: { type: String },
    isDeleted: { type: Boolean, default: false}
},
{
    collection:'player'
})

module.exports.PlayerModel = mongoose.model('PlayerModel', playerSchema);