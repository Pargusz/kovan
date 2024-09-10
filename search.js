// search.js

function listActiveUsers() {
    const activeUsersContainer = document.getElementById('active-users');
    const activeUsers = JSON.parse(localStorage.getItem('activeUsers')) || [];

    if (activeUsers.length > 0) {
        activeUsers.forEach(username => {
            const userBox = document.createElement('div');
            userBox.className = 'user-box';
            userBox.textContent = username;
            activeUsersContainer.appendChild(userBox);
        });
    } else {
        const infoBox = document.createElement('div');
        infoBox.className = 'info-box';
        infoBox.textContent = 'Aktif kullanıcı bulunmuyor.';
        activeUsersContainer.appendChild(infoBox);
    }
}

window.onload = listActiveUsers;
