function boxClicked(boxNumber, price) {
    // Bakiye bilgilerini localStorage'dan al
    let balance = parseFloat(localStorage.getItem('balance')) || 0;

    // Bakiye kontrolü
    if (balance >= price) {
        balance -= price; // Ücreti bakiyeden düş
        localStorage.setItem('balance', balance);
        alert(`Kutu ${boxNumber} seçildi. ${price} TL ödendi.`);
    } else {
        alert('Yeterli bakiyeniz yok.');
    }
}
