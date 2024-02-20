// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    }else {
        header.classList.remove('navbar-fixed')
    }
};



// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu  = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function ( ) {
     hamburger.classList.toggle('hamburger-active');
     navMenu.classList.toggle('hidden')
})






// function createTriangle(height) {
//     let triangle = '';
//     for (let i = 1; i <= height; i++) {
//         // Menambahkan spasi di awal setiap baris
//         for (let j = 0; j < height - i; j++) {
//             triangle += ' ';
//         }
//         // Menambahkan simbol '*' sesuai dengan jumlah baris
//         for (let k = 0; k < 2 * i - 1; k++) {
//             triangle += '*';
//         }
//         // Pindah ke baris baru
//         triangle += '\n';
//     }
//     return triangle;
// }

// const triangleHeight = 10; // Ganti nilai sesuai dengan tinggi segitiga yang diinginkan
// const result = createTriangle(triangleHeight);
// console.log(result);


