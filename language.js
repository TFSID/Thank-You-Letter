// script.js

// List ucapan terima kasih dalam berbagai bahasa
const languages = [
    "Terima Kasih", "Thank You", "Gracias", "Merci", "Danke", 
    "Grazie", "Arigato", "Obrigado", "Xie Xie", "Dhanyavaad"
];

// Pilih elemen HTML
const thankYouText = document.querySelector('.thank-you-text');
let index = 0;

// Fungsi untuk mengganti teks
function changeText() {
    thankYouText.innerText = languages[index];
    index = (index + 1) % languages.length;
}

// Panggil fungsi secara berkala
setInterval(changeText, 1000);
