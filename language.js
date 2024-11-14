// script.js

// List ucapan terima kasih dalam berbagai bahasa
const languages = [
    // Bahasa Daerah di Indonesia
    "hatur nuhun",     // Sunda
    "matur suwun",     // Jawa
    "tarima kasi",     // Makassar
    "kula nuwun",      // Jawa Ngoko
    "tabikpun",        // Lampung
    "dankeih",         // Aceh
    "itok nami",       // Batak Karo
    "molo koito",      // Batak Toba
    "tarima kasih",    // Betawi
    "kasian tomohon",  // Minahasa
    "madurasa",        // Madura
    "eida kito",       // Sasak
    "hambo kasih",     // Melayu Riau
    "caya karen",       // Dayak Ngaju
  
    // Bahasa Internasional
    "ありがとう",        // Japanese
    "谢谢",            // Chinese (Mandarin)
    "спасибо",         // Russian
    "شكرًا",           // Arabic
    "धन्यवाद",         // Hindi
    "고맙습니다",       // Korean
    "ขอบคุณ",           // Thai
    "አመሰግናለሁ",       // Amharic
    "תודה",            // Hebrew
    "धन्यवाद",         // Nepali
    "شكراً",            // Persian
    "ধন্যবাদ",          // Bengali
    "धन्यवाद",         // Marathi
    "ευχαριστώ",       // Greek
    "tack",            // Swedish
    "hvala",           // Bosnian/Serbian/Croatian
    "grazie",          // Italian
    "tak",             // Danish
    "dankon",          // Esperanto
    "muito obrigado"  // Portuguese
  
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
