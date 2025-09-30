document.addEventListener('DOMContentLoaded', function () {
    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function () {
            const atual = document.querySelector('.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proxima');

            atual.classList.remove('ativo');
            document.getElementById(proximoPasso).classList.add('ativo');
        });
    });

    // Adiciona a classe 'ativo' ao primeiro passo ao carregar a página
    document.getElementById('passo-0').classList.add('ativo');
});
