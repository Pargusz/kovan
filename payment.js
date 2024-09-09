document.addEventListener('DOMContentLoaded', function() {
    const balanceAmount = document.getElementById('balance-amount');
    const topUpBtn = document.getElementById('top-up-btn');

    // Kullanıcı bakiyesini localStorage'dan al
    let balance = parseFloat(localStorage.getItem('balance')) || 0;
    balanceAmount.textContent = balance;

    topUpBtn.addEventListener('click', function() {
        const topUpAmount = prompt('Yüklemek istediğiniz miktarı girin:');
        const amount = parseFloat(topUpAmount);
        
        if (!isNaN(amount) && amount > 0) {
            // Yeni bakiyeyi güncelle
            balance += amount;
            localStorage.setItem('balance', balance.toFixed(2));
            balanceAmount.textContent = balance.toFixed(2);
        } else {
            alert('Geçerli bir miktar girin.');
        }
    });
});
