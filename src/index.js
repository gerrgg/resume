const changingQoutes = ( element ) => {

    //https://quotes.rest/
    let qoutes = [
        { qoute: "The power of imagination makes us infinite.", author: 'John Muir' },
        { qoute: "My past is everything I failed to be.", author: 'Fernando Pessoa' },
        { qoute: "If you fell down yesterday, stand up today.", author: 'H.G. Wells' },
        { qoute: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
        { qoute: "Words build bridges into unexplored regions.", author: 'Adolf Hitler' },
        { qoute: "We build too many walls and not enough bridges.", author: 'Issac Newton' },
        { qoute: "Have no fear of perfection - you'll never reach it.", author: 'Salvador Dali' },
        { qoute: "It is never too late to be what you might have been.", author: 'George Eliot' },
        { qoute: "Only those who dare to fail greatly can ever achieve greatly.", author: 'Robert F. Kennedy' },
        { qoute: "I have not failed. I've just found 10,000 ways that won't work.", author: 'Thomas A. Edison' },
        { qoute: "Don't spend time beating on a wall, hoping to transform it into a door.", author: 'Coco Chanel' },
        { qoute: 'We make a living by what we get, but we make a life by what we give.', author: 'Winston Churchill' },
        { qoute: "Defeat doesn't finish a man, quit does. A man is not finished when he's defeated. He's finished when he quits.", author: 'Richard M. Nixon' },
        { qoute: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: 'Helen Keller' },
    ]

    const setQoute = () => {
        let index =  Math.floor( ( Math.random() * qoutes.length ) );
        let selectedQoute = qoutes[index];

        element.innerText = `"${selectedQoute.qoute}" - ${selectedQoute.author}`
    }

    return { setQoute }
}

const application = (() => {
    let qoute = changingQoutes( document.getElementById('quote') ).setQoute();
})();

// go deeper