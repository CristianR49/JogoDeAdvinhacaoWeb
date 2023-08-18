class AdivinhacaoIndexView
{
    txtChute = document.getElementById('txtChute')
    btnChute = document.getElementById('btnChute')
    btnTentarNovamente = document.getElementById('btnTentarNovamente')
    numeroSecreto;
    txtNotificacao = document.getElementById('txtNotificacao')

    constructor()
    {
        this.registrarEventos();
        this.gerarNumeroAleatorio();
    }

    registrarEventos()
    {
        this.btnChute.addEventListener('click', () => this.avaliarChute());
        this.btnTentarNovamente.addEventListener('click', () => this.tentarNovamente() );
    }

    gerarNumeroAleatorio()
    {
        this.numeroSecreto = Math.floor(Math.random() * 20) + 1;
    }

    avaliarChute()
    {
        console.log(this.numeroSecreto);
        console.log(this.txtChute.value);

        if (this.txtChute.value == "")
        {
            this.txtNotificacao.textContent = "Insira um número!";
            return;
        }

        if (this.txtChute.value == this.numeroSecreto)
        {
            this.txtNotificacao.textContent = "Parabéns, você acertou!";
            return;
        }
        
        if (this.txtChute.value > this.numeroSecreto)
        {
            this.txtNotificacao.textContent = "O numero secreto é menor!";
            return;
        }

        if (this.txtChute.value < this.numeroSecreto)
        {
            this.txtNotificacao.textContent = "O numero secreto é maior!";
            return;
        }
    }

    tentarNovamente()
    {
        this.gerarNumeroAleatorio();
        this.txtNotificacao.textContent = "";
        this.txtChute.value = "";
    }

}

window.addEventListener('load', () => new AdivinhacaoIndexView());















// document.addEventListener("DOMContentLoaded", function () {
//     const randomNumber = Math.floor(Math.random() * 20) + 1;
//     const guessInput = document.getElementById("guess");
//     const checkButton = document.getElementById("checkButton");
//     const result = document.getElementById("result");

//     checkButton.addEventListener("click", function () {
//         const userGuess = parseInt(guessInput.value);
//         if (isNaN(userGuess) || userGuess < 1 || userGuess > 20) {
//             result.textContent = "Escolha um número válido entre 1 e 20.";
//         } else {
//             if (userGuess === randomNumber) {
//                 result.textContent = "Parabéns! Você acertou!";
//             } else {
//                 result.textContent = `Tente novamente. O número correto é ${randomNumber > userGuess ? "maior" : "menor"}.`;
//             }
//         }
//     });
// });