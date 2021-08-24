const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categories = ['puertas', 'zaguanes', 'ventanas', 'barandales'];

const ImagesSchema = Schema({
    category: {
       type: String,
       require: true,
       enum: categories
    },
    imageUrl: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

ImagesSchema.method('toJSON', function(){
    const { _v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;

})


module.exports = mongoose.model('images', ImagesSchema);