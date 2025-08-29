// Scroll reveal for products
const productCards = document.querySelectorAll('.product-card');
window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    productCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom){
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
            card.style.transition = '0.6s';
        } else {
            card.style.transform = 'translateY(30px)';
            card.style.opacity = '0';
        }
    });
});

// Simple Add to Cart Animation
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.textContent = "Added ✅";
        setTimeout(() => btn.textContent = "Add to Cart", 1000);
    });
});
