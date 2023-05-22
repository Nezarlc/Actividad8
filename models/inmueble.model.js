const {model, Schema} = require('mongoose');

const inmuebleSchema = new Schema({
    piso: Number,
    letra: String,
    extension: Number,
    numeroHab: Number,
    alquilado: Boolean,
    nombreProp: String,
    email: String
}, { timestamps: true, versionKey: false});

module.exports = model('inmueble', inmuebleSchema);