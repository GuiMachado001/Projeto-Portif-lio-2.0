const initTypingAnimation = () => {
    const titleApresentação = document.querySelector('.titleApresentação h1')
    const span = document.querySelector('.titleApresentação span')
    const paragraph = document.querySelector('.titleApresentação p')

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
    typingAnimation(titleApresentação, 'Olá, eu sou o ', 0)
    typingAnimation(span, 'Guilherme Machado', 1600)
    typingAnimation(paragraph, 'Desenvolvedor Front-End', 3700)
}

initTypingAnimation()