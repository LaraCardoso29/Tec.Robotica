// Função para virar o cartão ao clicar ou pressionar Enter/Espaço
function virarCartao(cartao) {
  cartao.classList.toggle('virado');
}

// Suporte para navegação por teclado
document.querySelectorAll('.cartao').forEach(card => {
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      virarCartao(card);
    }
  });
});
