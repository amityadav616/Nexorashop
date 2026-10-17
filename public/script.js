let cartCount = 0;
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    cartCount += 1;
    document.getElementById('cart-count').textContent = cartCount;
    const old = button.innerHTML;
    button.innerHTML = 'Added to bag <span>✓</span>';
    setTimeout(() => button.innerHTML = old, 1100);
  });
});
document.getElementById('newsletter-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-message').textContent = 'Thanks for joining us! Newsletter signup demo completed.';
  event.target.reset();
});
document.getElementById('year').textContent = new Date().getFullYear();
