// Definir os jogadores um e dois

const jogador1 = "X";
const jogador2 = "Triângulo";

// Definir a vez do jogador

let rodada =  jogador1;

// Definir se o jogo acabou

let fim_de_jogo = false;

atualizar_a_parte();
iniciar_joguinho();

// Criar função para mostrar a vez do jogador no montador ou na parte se preferir

function atualizar_a_parte(){
    // FIm de jogo não faz nada
    if (fim_de_jogo) {return;}
    if (rodada == jogador1) {
        let jogador = document.querySelectorAll("div#parte img")[0];
        jogador.setAttribute("src", "imagens/XIS.png");
    }else{

        let jogador = document.querySelectorAll("div#parte img")[0];
        jogador.setAttribute("src", "imagens/triangulo.png");
    }
}

function iniciar_joguinho(){
    let posicaos = document.getElementsByClassName('posicao');
    for (let i = 0; i < posicaos.length; i++) {
        // AddEvent ele adiciona um evento dentro de uma lista
        posicaos [i].addEventListener("click", function(){
            // Fim de jogo não faz nada
            if (fim_de_jogo) {return;}
            // This seria algo do tipo espaço clickado
            if (this.getElementsByTagName("img").length == 0){
                if (rodada == jogador1) {
                    this.innerHTML = "<img src'imagens/XIS.png'>"; 
                    this.setAttribute("jogada", jogador1);
                    rodada = jogador2;
                }else{
                    this.innerHTML = "<img src'imagens/triangulo.png'>"; 
                    this.setAttribute("jogada", jogador2);
                    rodada = jogador1;
                }
                atualizar_a_parte();
            }
        }
    )
    } 
}   