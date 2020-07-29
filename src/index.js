const changingQoutes = () => {

    //https://quotes.rest/
    let qoutes = [
        { qoute: 'Be yourself; everyone else is already taken.', author: 'Oscar Wilde' },
        { qoute: 'We make a living by what we get, but we make a life by what we give.', author: 'Winston Churchill' },
    ]

    const setQoute = () => {
        let index =  Math.floor( ( Math.random() * qoutes.length ) + 1 );
        let selectedQoute = qoutes[index];

        element.innerText = `"${selectedQoute.qoute}" - ${selectedQoute.author}`
    }

    return { setQoute }
}

const application = (() => {
    let qouteDom = changingQoutes();

})();

// go deeper
console.log( 'hi', document.getElementById('sidebar') )