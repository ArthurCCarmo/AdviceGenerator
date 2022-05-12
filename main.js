const resDiv = document.querySelector('#quote');
const resBtn = document.querySelector('#random');
const numQuote = document.querySelector('#number');




function getAdvice() {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const Adviceobj = adviceData.slip
        resDiv.innerHTML = `<p>"${Adviceobj.advice}"</p>`;
        numQuote.innerHTML = `<h2>Advice # ${Adviceobj.id}</h2>`;
    }).catch(error => {
        console.log(error)
    })
}

window.onload = () => {
    getAdvice();
};


function BotaoDesativado() {
    document.getElementById('botao').disabled = true;
    document.getElementById('botao').className = 'botaoDesativado';
}
function BotaoAtivo() {
    document.getElementById('botao').disabled = false;
    document.getElementById('botao').className = 'botao';
}
function button() {
    getAdvice();
    BotaoDesativado();
    setTimeout(() => { BotaoAtivo() }, 2000);
}