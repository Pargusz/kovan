document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun sayfayı yenilemesini engeller

    const username = document.getElementById('username').value;
    const agree = document.getElementById('agree').checked;

    if (username && agree) {
        // Kullanıcı adını localStorage'a kaydet
        localStorage.setItem('username', username);

        // Kullanıcıya göre başlangıç bakiyesini ayarla
        if (username.toLowerCase() === 'admin') {
            localStorage.setItem('balance', '200000'); // Admin için 200,000 TL
        } else {
            localStorage.setItem('balance', '0'); // Diğer kullanıcılar için 0 TL
        }

        // Şarkılar sayfasına yönlendir
        window.location.href = 'songs.html'; 
    } else {
        alert('Lütfen kullanıcı adı girin ve onay kutusunu işaretleyin.');
    }
});
