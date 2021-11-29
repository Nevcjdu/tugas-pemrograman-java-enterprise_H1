const express = require("express");
const app = express();
const bodyParser = require('body-parser');
//1811510617_rahmadadisaputra
//permorgraman java enterprise_H1

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/mahasiswa',(request,response)=>{
    response.end("Menampilkan mahasiswa");
})

app.get('/mahasiswa/:nama',(request,response)=>{
    //Proses dengan mahasiswa bernama x
    let namaMahasiswa = request.params.nama;

    response.end("Menampilkan mahasiswa dengan nama :" +namaMahasiswa);
})

app.post('/mahasiswa',(requset,response)=>{
    let namaMahasiswa = requset.body.nama;
    let alamatMahasiswa = requset.body.alamat;

    response.end("Mahasiswa baru! nama : " +namaMahasiswa + ", alamat : " + alamatMahasiswa);
})

app.delete('/mahasiswa/:nama',(request,response)=>{
    let namaMahasiswa = request.params.nama;

    response.end("Mahasiswa bernama " + namaMahasiswa + " akan dihapus dari sistem!");
})

app.put('/mahasiswa/:nim',(requset,response)=>{
    let nim = request.params.nim;
    let namaMahasiswa = request.body.nama;
    let alamatMahasiswa = request.body.alamat;

    response.end("Mahasiswa dengan NIM "+ nim + "telah terupdate");
})

app.listen('8080',(e)=>{
    console.log(e)
})