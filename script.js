const selects = document.querySelectorAll('.select');
const projectDescription = document.getElementById('project-description');
const img = document.getElementById('imagem-projeto');
const srcSite = document.getElementById('src-site')

selects.forEach(select => {
    select.addEventListener('click', () => {
        selects.forEach(atual => atual.classList.remove('selected'));
        select.classList.add('selected');

        switch(select.id) {
            case 'discover':
                srcSite.href = 'https://thstolfi.github.io/projeto-discovery/'
                img.src = 'assets/cutdiscover.jpg'
                projectDescription.innerHTML = `
                    <p class="title">Discover</p>
                    <p class="project-text">Projeto proposto pelo curso Discover da Rocketseat.
                        O site é um cartão de visitas pessoal que conta com modo claro/noturno.
                    </p>`;
                break;
            case 'thejourney':
                srcSite.href = 'https://thstolfi.github.io/The-Journey/'
                img.src = 'assets/cutthejourney.jpg'
                projectDescription.innerHTML = `
                    <p class="title">The Journey</p>
                    <p class="project-text">The Journey é um website fictício (ainda não responsivo) 
                    com o objetivo de aprimorar minhas skills em design e desenvolvimento web.
                    </p>`;
                break;
            case 'dragonborn':
                srcSite.href = 'https://thstolfi.github.io/TheDragonborn/'
                img.src = 'assets/cutdragonborn.jpg'
                projectDescription.innerHTML = `
                    <p class="title">Dragonborn</p>
                    <p class="project-text">The Dragonborn é um website fictício inspirado em Skyrim. 
                    Nesse projeto utilizei Javascript para alterar o conteúdo da página conforme o usuário interage.
                    </p>`;
                break;
            case 'hort':
                srcSite.href = 'https://hortferramentas.com.br/'
                img.src = 'assets/cuthort.jpg'
                projectDescription.innerHTML = `
                    <p class="title">Hort Ferramentas</p>
                    <p class="project-text">Desenvolvido para uma loja de ferramentas e ferragens, 
                    o antigo website estava datado e sem formatação, 
                    então criei esse projeto simples para poder subir o website no ar novamente com uma cara nova.</p>`;
                break;
            case 'cardcreator':
                srcSite.href = 'https://thstolfi.github.io/CardCreator/'
                img.src = 'assets/cutcard.jpg'
                projectDescription.innerHTML = `
                    <p class="title">Card Creator</p>
                    <p class="project-text">Card Creator é um website simples 
                    desenvolvido para exercitar minhas habilidades em Javascript. Consiste na criação 
                    de cards de acordo com o que o usuário digitar, também é possível excluir cards já criados.
                    </p>`;
                break;
        }
    });
});

