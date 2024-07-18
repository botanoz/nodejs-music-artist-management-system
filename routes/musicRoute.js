const express = require("express");
const Music = require("../models/musicModel");
const musicRouter = express.Router();

// Tüm müzikleri getirme
musicRouter.get("/musics", async (req, res) => {
    try {
        let musics = await Music.find({});
        res.status(200).send({ status: true, message: "All musics retrieved successfully.", musics: musics });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error retrieving musics: " + error.message });
    }
});

// Yeni bir müzik oluşturma
musicRouter.post("/music", async (req, res) => {
    try {
        let music = await Music.create(req.body);
        res.status(201).send({ status: true, message: "Music created successfully.", music: music });
    } catch (error) {
        res.status(400).send({ status: false, message: "Error creating music: " + error.message });
    }
});

// Belirli bir müziği getirme
musicRouter.get("/music/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let music = await Music.findById(id);

        if (!music) {
            return res.status(404).send({ status: false, message: "Music not found." });
        }

        res.status(200).send({ status: true, message: "Music retrieved successfully.", music: music });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error retrieving music: " + error.message });
    }
});

// Belirli bir müziği silme
musicRouter.delete("/music/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let music = await Music.findByIdAndDelete(id);

        if (!music) {
            return res.status(404).send({ status: false, message: "Music not found." });
        }

        res.status(200).send({ status: true, message: "Music deleted successfully." });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error deleting music: " + error.message });
    }
});

// Belirli bir müziği güncelleme
musicRouter.put("/music/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let music = await Music.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!music) {
            return res.status(404).send({ status: false, message: "Music not found." });
        }

        res.status(200).send({ status: true, message: "Music updated successfully.", music: music });
    } catch (error) {
        res.status(400).send({ status: false, message: "Error updating music: " + error.message });
    }
});

// Sanatçıya göre müzikleri getirme
musicRouter.get("/musics/artist/:artistId", async (req, res) => {
    try {
        let { artistId } = req.params;
        let musics = await Music.find({ artistId: artistId });

        if (musics.length === 0) {
            return res.status(404).send({ status: false, message: "No musics found for this artist." });
        }

        res.status(200).send({ status: true, message: "Musics retrieved successfully for the artist.", musics: musics });
    } catch (error) {
        res.status(500).send({ status: false, message: "Error retrieving musics for the artist: " + error.message });
    }
});

// Endpoint'leri ve şemayı döndürür
musicRouter.get("/endpoints", (req, res) => {
    const endpoints = {
        getAll: "GET /musics",
        create: "POST /music",
        get: "GET /music/:id",
        update: "PUT /music/:id",
        delete: "DELETE /music/:id",
        byArtist: "GET /musics/artist/:artistId",
        schema: {
            name: "String (required)",
            album: "String (required)",
            genre: "String (required)",
            releaseYear: "Number (required)",
            image: "String (required)",
            description: "String",
            artistId: "ObjectId (required, references Artist)"
        }
    };
    res.status(200).send({ status: true, endpoints: endpoints });
});

module.exports = musicRouter;
