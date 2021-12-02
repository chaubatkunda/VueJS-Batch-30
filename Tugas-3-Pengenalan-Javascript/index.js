// TODO SOAL 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";
//! saya senang belajar JAVASCRIPT

//? Jawaban No 1
var pe1 = pertama.substr(0, 4);
var pe2 = pertama.substr(12, 6);
var ke3 = kedua.substr(0, 7);
var ke4 = kedua.substr(8, 10);
var up = ke4.toUpperCase();
var ga1 = pe1.concat(pe2);
var ga2 = ke3.concat(up);
var hasil = ga1.concat(ga2);
console.log(hasil);

// TODO SOAL 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// ? Jawaban No 2

var ka1 = parseInt(kataPertama);
var ka2 = parseInt(kataKedua);
var ka3 = parseInt(kataKetiga);
var ka4 = parseInt(kataKeempat);
console.log((ka2 * ka2) + (ka1 + ka3 + ka4));

// TODO SOAL 3
var kalimat = 'wah javascript itu keren sekali';

// ? Jawaban No 3
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15);; // do your own! 
var kataKetiga = kalimat.substring(15, 19);; // do your own! 
var kataKeempat = kalimat.substring(19, 25);; // do your own! 
var kataKelima = kalimat.substring(25, 32);; // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
