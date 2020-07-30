import { changingQoutes } from './quote'

const application = (() => {
    let qoute = changingQoutes( document.getElementById('quote') ).setQoute();
})();

// go deeper