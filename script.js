// ==== Tombol Sapa ====
const tombolSapa = document.getElementById('sapaButton');

tombolSapa.addEventListener('click', function() {
  tombolSapa.style.transform = 'scale(0.9)';
  tombolSapa.style.transition = 'transform 0.2s ease';

  setTimeout(() => {
    tombolSapa.style.transform = 'scale(1)';
  }, 200);

  const pesan = [
    'Nice to meet you brok 😎',
    'Halo juga, legend HTML 💻',
    'Selamat datang di profil kece ini ✨',
    'Kamu keren juga mampir ke sini 😁',
    'Semoga harimu seindah animasi CSS ini 💫'
  ];

  const randomPesan = pesan[Math.floor(Math.random() * pesan.length)];
  alert(randomPesan);
});


// ==== Tombol Instagram ====
const tombolInstagram = document.querySelector('.btn-link');

tombolInstagram.addEventListener('click', function(event) {
  event.preventDefault(); // cegah reload halaman
  tombolInstagram.classList.add('klik-efek');
  window.open('https://www.instagram.com/dhrmmaa__', '_blank'); // buka link IG
  setTimeout(() => tombolInstagram.classList.remove('klik-efek'), 300);
});
