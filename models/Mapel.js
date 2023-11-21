const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama_mapel: {
        type: String,
        required: [true, 'Silahkan isikan nama mapel'], 
        unique: true
    },
    jam_pelajaran: {
        type: String,
        required: true,
        unique: true,
    },
    guru_pengajar: {
        type: String,
        required: true,
    },
    kategori_mapel:{
        type: String,
        required: true,
    },
    ruangan_kelas:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Mapels', UserSchema)