import { indexMenor, input, myReduce, print } from "./utils.js"

export function verificarVitoria(torreR,torreG,torreB){
    return verificarTorre(torreR,'R') && verificarTorre(torreG,'G') && verificarTorre(torreB,'B')
}

function verificarTorre(torre,elemento){
    for(let i = 0;i < torre.length;i++){
        if (torre[i] !== elemento){
            return false
        }
    }
    return true
}

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function conferirElementos(torre,elementos){
    for(let i = 0;i < elementos.length;i++){
        if(!torre.includes(elementos[i])){
            return false
        }
    }
    return true
}

export function geradorTorres(n){//o gerador de torres vai gerar a torre com o tamnho informado
    const torre = []
    const elementos = ['R','G','B']

    for(let i = 0;i < n;i++){
        torre.push(elementos[random(0,elementos.length-1)])
    }
    if(n > 2){
    //garantir que tenha pelo menos um elemento de cada
    while(!conferirElementos(torre,elementos)){
        for(let i = 0;i < n;i++){
            torre[i] = elementos[random(0,elementos.length-1)]
            }
        }
    }

    return torre
}

function topoBase(torre){
    let novaTorre = []
    if(torre.length > 0){
        for(let i = torre.length - 1;i >= 0;i--){
            novaTorre.push(torre[i])
        }

    }
    return novaTorre
}

export function exibirTorres(torreR,torreG,torreB){
    return(`--------------------------------------
Torre R: [${topoBase(torreR)}]
Torre G: [${topoBase(torreG)}]
Torre B: [${topoBase(torreB)}]`)
}

function gerarOpcoes(torreR,torreG,torreB){
    const opcoes = []

    if(torreR.length > 0){
        opcoes.push('RG')
        opcoes.push('RB')
    }
    if(torreG.length > 0){
        opcoes.push('GR')
        opcoes.push('GB')
    }
    if(torreB.length > 0){
        opcoes.push('BR')
        opcoes.push('BG')
    }
    return opcoes
}

export function gerarMenu(torreR,torreG,torreB){
    const possiveisOpcoes = gerarOpcoes(torreR,torreG,torreB)
    let menu = `--------------------------------------
        [ OPÇOES ]
[0]  - [ FINALIZAR PARTIDA ]\n`

    for(let i = 0;i < possiveisOpcoes.length;i++){
        menu += `[${possiveisOpcoes[i]}] - [ MOVER DE ${possiveisOpcoes[i][0]} PARA ${possiveisOpcoes[i][1]} ]\n`
    }
    menu += `--------------------------------------`
    return menu
}

function mover(torreOrigem,torreDestino){
    const item = torreOrigem.pop()
    torreDestino.push(item)
}

export function movimentar(movimento,torreR, torreG, torreB){
    if (movimento == 'RG'){
        mover(torreR,torreG)
    }else if (movimento == 'RB'){
        mover(torreR,torreB)
    }else if (movimento == 'GB'){
        mover(torreG,torreB)
    }else if (movimento == 'GR'){
        mover(torreG,torreR)
    }else if (movimento == 'BR'){
        mover(torreB,torreR)
    }else if (movimento == 'BG'){
        mover(torreB,torreG)
    }
}

export function validarMovimento(text,torreR,torreG,torreB){
    let movimento = input(text)
    while (!gerarOpcoes(torreR,torreG,torreB).includes(movimento) && movimento !== '0'){
        print('Informe um movimento válido!')
        movimento = input(text)
        
    }
    return movimento
}

export function quantidadeAleatoria(valor,tamanho){
    const listaNumeros = []
    for(let i = 0;i < tamanho;i++){
        listaNumeros.push(random(0,valor))
    }

    while(myReduce((a,b) => a + b,listaNumeros,0) !== valor) {
        for(let j = 0;j < tamanho;j++){
            listaNumeros[j] = random(0,valor)
        }
    }
    return listaNumeros
}

export function exibirPlacar(pontuacao){
    if(pontuacao[0] === pontuacao[1]){
        return `--------------------------------------
        [ PLACAR ]
VENCEDOR   : EMPATE
MOVIMENTOS : [${pontuacao[0]}]`
    }
    return `--------------------------------------
        [ PLACAR ]
VENCEDOR   : JOGADOR [${indexMenor(pontuacao) + 1}]
MOVIMENTOS : [${pontuacao[indexMenor(pontuacao)]}]`
}