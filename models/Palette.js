var mongoose = require('mongoose');

var PaletteSchema = new mongoose.Schema({
 title: { type: String},
 colors: [{ name: String, shade: String }],
 createdBy: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 date: Date
 });

 mongoose.model('Palette', PaletteSchema);
