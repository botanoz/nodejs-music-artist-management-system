const mongoose = require("mongoose");

const MusicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    album: {
        type: String,
        required: [true, "Album is required!"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required!"]
    },
    releaseYear: {
        type: Number,
        required: [true, "Release year is required!"]
    },
    image: {
        type: String,
        required: [true, "Image URL is required!"]
    },
    description: {
        type: String,
        required: false
    },
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }
});

const Music = mongoose.model("Music", MusicSchema);
module.exports = Music;
