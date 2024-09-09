document.addEventListener('DOMContentLoaded', function() {
    // Sayfanın body elementine "ayro-page" sınıfını ekle
    document.body.classList.add('ayro-page');

    const rankingList = document.getElementById('ranking-list');

    // Örnek veriler
    const users = [
        { username: 'admin', totalSpent: 50000 },
        { username: 'user1', totalSpent: 30000 },
        { username: 'user2', totalSpent: 15000 },
        { username: 'user3', totalSpent: 5000 }
    ];

    // Verileri en yüksek harcamadan en düşük harcamaya sıralama
    users.sort((a, b) => b.totalSpent - a.totalSpent);

    // Listeyi oluşturma
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username}: ${user.totalSpent} TL`;
        rankingList.appendChild(listItem);
    });
});
