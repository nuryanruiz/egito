document.addEventListener('DOMContentLoaded', function () {
    // Adiciona a classe 'ativo' ao primeiro passo ao carregar a página
    document.getElementById('passo-0').classList.add('ativo');

    const avanca = document.querySelectorAll('.btn-proximo');

    avanca.forEach(button => {
        button.addEventListener('click', function () {
            const atual = document.querySelector('.ativo');
            const proximoPasso = 'passo-' + this.getAttribute('data-proxima');

            // Verifica se o próximo passo existe
            if (document.getElementById(proximoPasso)) {
                // Remove a classe 'ativo' do passo atual
                atual.classList.remove('ativo');

                // Adiciona a classe 'ativo' ao próximo passo
                document.getElementById(proximoPasso).classList.add('ativo');
            }
        });
    });
});


