const ponta = document.querySelector('.ponta-envelope');
const carta = document.querySelector('.carta');

const envelope = document.querySelector('.envelope');

let cartaVisivel = false;



envelope.addEventListener('click', () => {

    ponta.classList.toggle('aberta');

    if (!cartaVisivel) {
        carta.classList.toggle('visivel');
        cartaVisivel = true;
    }
    else {
        carta.classList.remove('visivel');
        cartaVisivel = false;

        setTimeout(() => {
            if (!cartaVisivel) {
                carta.style.visibility = "hidden";
            }
        }, 500)

    }
    if (cartaVisivel) {
        carta.style.visibility = "visible";
    }

});


