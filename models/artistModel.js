const mongoose = require("mongoose");

const ArtistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        unique: true
    },
    genre: {
        type: String,
        required: [true, "Genre is required!"]
    },
    description: {
        type: String,
        required: false
    }
});

const Artist = mongoose.model("Artist", ArtistSchema);
module.exports = Artist;
