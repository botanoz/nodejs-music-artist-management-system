# nodejs-music-artist-management-system
# Müzik ve Sanatçı Yönetim Sistemi

## Proje Açıklaması
Bu proje, Bahçeşehir Üniversitesi Wissen Akademie Yazılım Kursu ödevi olarak yapılmıştır. Proje, müzik ve sanatçıların yönetimi için bir API sağlamaktadır. Kullanıcılar, müzik ve sanatçı bilgilerini ekleyebilir, güncelleyebilir, silebilir ve görüntüleyebilirler. Bu API, sanatçılara ve müziklere ait bilgileri MongoDB veritabanında saklar ve JWT (JSON Web Token) ile güvenlik sağlar.

## Kullanılan Teknolojiler ve Paketler
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- dotenv
- cors

## Kurulum
1. Projeyi klonlayın:
   ```bash
   git clone https://github.com/botanoz/nodejs-music-artist-management-system.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd https://github.com/botanoz/nodejs-music-artist-management-system.git
   ```
3. Gerekli paketleri yükleyin:
   ```bash
   npm install
   ```
4. `.env` dosyasını oluşturun ve gerekli çevresel değişkenleri ekleyin:
   ```env
   mykey=YOUR_SECRET_KEY
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.obghker.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

## Kullanım
Sunucuyu başlatmak için aşağıdaki komutu kullanın:
```bash
npm start
```

### Endpointler
#### Sanatçılar
- **POST /artist/register**: Yeni bir sanatçı ekler.
- **GET /artist/getAll**: Tüm sanatçıları listeler.
- **PUT /artist/update/:id**: Belirli bir sanatçıyı günceller.
- **DELETE /artist/delete/:id**: Belirli bir sanatçıyı siler.
- **GET /artist/get/:id**: Belirli bir sanatçıyı getirir.
- **GET /artist/byMusic/:musicId**: Belirli bir müziğe göre sanatçıyı getirir.

#### Müzikler
- **GET /music/musics**: Tüm müzikleri listeler.
- **POST /music/music**: Yeni bir müzik ekler.
- **GET /music/music/:id**: Belirli bir müziği getirir.
- **PUT /music/music/:id**: Belirli bir müziği günceller.
- **DELETE /music/music/:id**: Belirli bir müziği siler.
- **GET /music/musics/artist/:artistId**: Belirli bir sanatçıya göre müzikleri listeler.

## Lisans
Bu proje MIT lisansı ile lisanslanmıştır. Daha fazla bilgi için LICENSE dosyasına bakın.

---

# Music and Artist Management System

## Project Description
This project was created as an assignment for Bahçeşehir University Wissen Akademie Software Course. The project provides an API for managing music and artists. Users can add, update, delete, and view music and artist information. This API stores information about artists and music in a MongoDB database and ensures security with JWT (JSON Web Token).

## Technologies and Packages Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- dotenv
- cors

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/botanoz/nodejs-music-artist-management-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd https://github.com/botanoz/nodejs-music-artist-management-system.git
   ```
3. Install the required packages:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the necessary environment variables:
   ```env
   mykey=YOUR_SECRET_KEY
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.obghker.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   ```

## Usage
To start the server, use the following command:
```bash
npm start
```

### Endpoints
#### Artists
- **POST /artist/register**: Adds a new artist.
- **GET /artist/getAll**: Lists all artists.
- **PUT /artist/update/:id**: Updates a specific artist.
- **DELETE /artist/delete/:id**: Deletes a specific artist.
- **GET /artist/get/:id**: Retrieves a specific artist.
- **GET /artist/byMusic/:musicId**: Retrieves an artist by specific music.

#### Music
- **GET /music/musics**: Lists all music.
- **POST /music/music**: Adds new music.
- **GET /music/music/:id**: Retrieves specific music.
- **PUT /music/music/:id**: Updates specific music.
- **DELETE /music/music/:id**: Deletes specific music.
- **GET /music/musics/artist/:artistId**: Lists music by specific artist.

## License
This project is licensed under the MIT License. For more information, see the LICENSE file.
