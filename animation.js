window.onload = () => {
    const logo = document.querySelector('.logo');
    const line = document.querySelector('.line-container');

    // Após a animação de entrada, as letras se tornam linhas
    setTimeout(() => {
        logo.style.transition = 'all 1.5s ease';
        logo.style.transform = 'scale(10) translateY(-50%)';
        logo.style.opacity = '0';
    }, 3000);

    // Linha de saída semelhante à da Netflix
    setTimeout(() => {
        line.style.animation = 'lineExit 2s forwards';
    }, 4000);

    // Redirecionar para a página principal após a animação (tempo total de 6 segundos)
    setTimeout(() => {
        window.location.href = "index.html"; // Substitua pelo link da sua página principal
    }, 6000); // Tempo total da animação antes de redirecionar
};
