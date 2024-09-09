document.addEventListener('DOMContentLoaded', function() {
    const usernameDisplay = document.getElementById('username-display');
    const logoutBtn = document.getElementById('logout-btn');

    // Kullanıcı adını localStorage'dan al
    const username = localStorage.getItem('username');
    
    if (username) {
        usernameDisplay.textContent = username;
    } else {
        usernameDisplay.textContent = 'Kullanıcı adı bulunamadı';
    }

    logoutBtn.addEventListener('click', function() {
        // localStorage'dan kullanıcı adını sil
        localStorage.removeItem('username');
        
        // Ana sayfaya yönlendir
        window.location.href = 'index.html';
    });
});
