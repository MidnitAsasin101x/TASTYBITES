function showMessage(approxTime) {
    const orderLinks = document.querySelectorAll('.order-link');
    orderLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.order-card');
            const thankYouMessage = card.querySelector('.thank-you-message');
            const estimatedTimeSpan = card.querySelector('.estimated-time');
            
            thankYouMessage.style.display = 'block';
            estimatedTimeSpan.textContent = approxTime;
            card.querySelector('.order-button').style.display = 'none';
        });
    });
}
