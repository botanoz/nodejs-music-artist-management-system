const express = require("express");
const Artist = require("../models/artistModel");
const Music = require("../models/musicModel");
const artistRouter = express.Router();

// Sanatçı kayıt
artistRouter.post("/register", async (req, res) => {
    try {
        const { name, genre, description } = req.body;
        if (!name || !genre) {
            return res.status(400).send({ status: false, message: "Name and genre are required fields." });
        }
        let artist = await Artist.create(req.body);
        res.status(201).send({ status: true, artist: artist, message: "Artist successfully created." });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error creating artist: " + error.message });
    }
});

// Tüm sanatçıları listeleme
artistRouter.get("/getAll", async (req, res) => {
    try {
        const artists = await Artist.find({});
        res.status(200).send({ status: true, artists: artists });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error fetching artists: " + error.message });
    }
});

// Sanatçı bilgilerini güncelleme
artistRouter.put("/update/:id", async (req, res) => {
    try {
        const artistId = req.params.id;
        const updates = req.body;
        const artist = await Artist.findByIdAndUpdate(artistId, updates, { new: true, runValidators: true });

        if (!artist) {
            return res.status(404).send({ status: false, message: "Artist not found." });
        }

        res.status(200).send({ status: true, artist: artist, message: "Artist successfully updated." });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error updating artist: " + error.message });
    }
});

// Sanatçı silme
artistRouter.delete("/delete/:id", async (req, res) => {
    try {
        const artistId = req.params.id;
        const artist = await Artist.findByIdAndDelete(artistId);

        if (!artist) {
            return res.status(404).send({ status: false, message: "Artist not found." });
        }

        res.status(200).send({ status: true, message: "Artist successfully deleted." });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error deleting artist: " + error.message });
    }
});

// Belirli bir sanatçıyı getirme
artistRouter.get("/get/:id", async (req, res) => {
    try {
        const artistId = req.params.id;
        const artist = await Artist.findById(artistId);

        if (!artist) {
            return res.status(404).send({ status: false, message: "Artist not found." });
        }

        res.status(200).send({ status: true, artist: artist });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error fetching artist: " + error.message });
    }
});

// Belirli bir müziğe göre sanatçıyı getirme
artistRouter.get("/byMusic/:musicId", async (req, res) => {
    try {
        const { musicId } = req.params;
        const music = await Music.findById(musicId);

        if (!music) {
            return res.status(404).send({ status: false, message: "Music not found." });
        }

        const artist = await Artist.findById(music.artistId);

        if (!artist) {
            return res.status(404).send({ status: false, message: "Artist not found for this music." });
        }

        res.status(200).send({ status: true, artist: artist });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error fetching artist by music: " + error.message });
    }
});

// Endpoint'leri ve şemayı döndürür
artistRouter.get("/endpoints", (req, res) => {
    const endpoints = {
        register: "POST /register",
        getAll: "GET /getAll",
        update: "PUT /update/:id",
        delete: "DELETE /delete/:id",
        get: "GET /get/:id",
        byMusic: "GET /byMusic/:musicId",
        schema: {
            name: "String (required)",
            genre: "String (required)",
            description: "String"
        }
    };
    res.status(200).send({ status: true, endpoints: endpoints });
});

module.exports = artistRouter;
