window.addEventListener('DOMContentLoaded', (event) => {
    const sr = ScrollReveal({ reset: true }, {mobile: true,});

    sr.reveal('#home', { duration: 2000 });
    
    sr.reveal('.containerBox', {
        rotate: { x: 0, y: 80, z: 0 },
        duration: 3000,
        reset: false,
        mobile: true,
    });

    sr.reveal('.containerBoxIcons', {
        rotate: { x: 100, y: 110, z: 0 },
        duration: 1000,
        reset: false,
        mobile: true,
    });

    sr.reveal('.meusCursos', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });

    sr.reveal('.containerCard1', {
        distance: '3000px',
        origin: 'left',
        duration: 1000,
        delay: 100,
        reset: false,
        mobile: true,
    });
sr.reveal('.containerCard2', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 300,
    reset: false,
    mobile: true,
});
sr.reveal('.containerCard3', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 500,
    reset: false,
    mobile: true,
});
sr.reveal('.containerCard4', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 700,
    reset: false,
    mobile: true,
});


sr.reveal('.containerCard5', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 100,
    reset: false,
    mobile: true,
});
sr.reveal('.containerCard6', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 300,
    reset: false,
    mobile: true,
});
sr.reveal('.containerCard7', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 500,
    reset: false,
    mobile: true,
});
sr.reveal('.containerCard8', {
    distance: '3000px',
    origin: 'left',
    duration: 1000,
    delay: 700,
    reset: false,
    mobile: true,
});
});











const initTypingAnimation = () => {
    const titleApresentacao = document.querySelector('.titleApresentacao h1')
    const span = document.querySelector('.titleApresentacao span')
    const paragraph = document.querySelector('.titleApresentacao p')

    const typingAnimation = (element, text, delay) => {
        setTimeout(() => {
            element.innerHTML = '' // Limpa o conteúdo atual
            const textToArray = text.split('') // Converte o texto em um array de caracteres

            // Itera sobre o array de caracteres e exibe-os com um atraso
            textToArray.forEach((item, index) => {
                setTimeout(() => element.innerHTML += item, 75 * index)
            })
        }, delay)
    }

    // Inicia a animação para cada elemento com seu respectivo texto e atraso
    typingAnimation(titleApresentacao, 'Olá, eu sou o ', 0)
    typingAnimation(span, 'Guilherme Machado', 1600)
    typingAnimation(paragraph, 'Desenvolvedor Front-End', 3700)
}

initTypingAnimation()