// profile.js

// Kullanıcı adı ve takipçi sayısı verilerini çekiyoruz
const username = localStorage.getItem('username') || 'Bilinmiyor';
const followerCount = localStorage.getItem('followerCount') || 0;

// HTML elementlerine verileri yerleştiriyoruz
document.getElementById('username').textContent = username;
document.getElementById('followerCount').textContent = followerCount;

// Çıkış yap butonuna tıklama olayı
document.getElementById('logout').addEventListener('click', () => {
    // Çıkış yap işlemi için gerekli adımlar (örneğin, localStorage temizlenebilir)
    localStorage.clear();
    window.location.href = 'index.html'; // Giriş sayfasına yönlendirme
});
