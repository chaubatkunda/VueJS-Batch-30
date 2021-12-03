// ? Soal No 1
//! pilih angka dari 0 sampai 100, misal 75. lalu isi variabel tersebut dengan angka tersebut. lalu buat lah pengkondisian dengan if-elseif dengan kondisi
var nilai = 66;
//* Jawaban No 1
if (nilai >= 85) {
    console.log('A');
} else if (nilai >= 75 && nilai < 85) {
    console.log('B');
} else if (nilai >= 65 && nilai < 75) {
    console.log('C');
} else if (nilai >= 55 && nilai < 65) {
    console.log('D');
}else {
    console.log('E');
}

//? Soal No 2
var tanggal = 31;
var bulan = 5;
var tahun = 2021;

//* Jawaban No 2
switch(tanggal) {
  case 31:   { console.log('31'); break; }
    default: { console.log('Tanggal Salah'); }
}switch (bulan) {
    case 5: { console.log('Mei'); break};
    default: { console.log('Bulan Salah'); break};
}switch (tahun) {
    case 2021: { console.log('2021'); break};
    default: { console.log('Tahun Salah'); break};
}

// ? Soal No 3
// Kali ini kamu diminta untuk menampilkan sebuah segitiga dengan tanda pagar (#) dengan dimensi tinggi n dan alas n. Looping boleh menggunakan syntax apa pun (while, for, do while).
// Output untuk n=3 :

// * Jawaban No 3
var n = 5;
var inp = '';
for(var a = 1; a <= n; a++) {
    for (let b = 1; b <= a; b++){
        inp += '#';
    }
    inp += '\n';
}
console.log(inp);

// ? Soal No 4
// berilah suatu nilai m dengan tipe integer, dan buatlah pengulangan dari 1 sampai dengan m, dan berikan output sebagai berikut.
// contoh :
// Output untuk m = 3

//* Jawaban No 4

var m = 8;

for (var i = 1; i <= m; i++) {
    a = i % 3

    switch (a) {
        case 1:
            console.log(i + ' - I Love Programming')
            break;
        case 2:
            console.log(i + ' - I Love Javasript')
            break
        default:
            console.log(i + ' - I Love VueJs')
            var sama = ""
            for (let k = 0; k < i; k++) {
                sama = sama + "="
                console.log(sama)
            }
            break;
    }
    
}


