import { geradorTorres, exibirTorres, verificarVitoria, gerarMenu, movimentar, validarMovimento, quantidadeAleatoria, exibirPlacar } from "./hanoi-utils.js"
import { getIntegerBetween, getPositiveInteger } from "./utils.js"

// Função que exibe o menu de opções do jogo
function menuOpcoes() {
    return `--------------------------------------
    [ MENU ]
[0] - SAIR 
[1] - NÍVEL 1
[2] - NÍVEL 2
[3] - NÍVEL 3
--------------------------------------`
}

// Função principal que controla o fluxo do jogo
function main() {
    while (true) {
        console.log(menuOpcoes())
        
        // Obtém a escolha do jogador entre as opções do menu
        let escolhaPrincipal = getIntegerBetween('ESCOLHA UMA OPÇÃO: ', 0, 3)

        // Encerra o jogo se a opção for 0
        if (escolhaPrincipal === 0) {
            console.log('[ FIM DE JOGO ]')
            break

        // Nível 1: jogador define o número de elementos da torre
        } else if (escolhaPrincipal === 1) {
            let quantidadeElementos = 9//getPositiveInteger('NÚMERO DE ELEMENTOS DA TORRE: ')
            let guardarTorreR = geradorTorres(quantidadeElementos)  // Gera a torre inicial
            const totalMovimentosJogadores = []
    
            // Dois jogadores participam da partida
            for (let p = 0; p < 2; p++) {
                let torreR = guardarTorreR.slice()  // Copia a torre gerada
                let torreG = []
                let torreB = []
                let numeroMovimentosAtual = 0
                let escolhaPartida = ''
                
                // Continua o jogo até que o jogador vença
                while (!verificarVitoria(torreR, torreG, torreB)) {
                    console.log(exibirTorres(torreR, torreG, torreB))  // Exibe o estado atual das torres
                    console.log(gerarMenu(torreR, torreG, torreB))  // Exibe o menu de movimentos
                    
                    // Valida o movimento escolhido pelo jogador
                    escolhaPartida = validarMovimento('OPÇÃO ESCOLHIDA: ', torreR, torreG, torreB)
                    if (escolhaPartida === '0') {
                        break
                    }
        
                    movimentar(escolhaPartida, torreR, torreG, torreB)  // Realiza o movimento nas torres
                    numeroMovimentosAtual++
                }

                if (escolhaPartida === '0') {
                    break
                }
                totalMovimentosJogadores.push(numeroMovimentosAtual)  // Armazena o número de movimentos do jogador
                console.log(exibirTorres(torreR, torreG, torreB))  // Exibe o estado final das torres
                console.log('--------------------------------------')
                console.log(`-- O JOGADOR [${p+1}] FEZ [${numeroMovimentosAtual}] MOVIMENTOS --`)
               
                // Exibe o placar após o segundo jogador jogar
                if(p === 1) {
                    console.log(exibirPlacar(totalMovimentosJogadores))
                }
            }  

        // Nível 2: as torres são distribuídas de forma aleatória
        } else if(escolhaPrincipal === 2){
            let quantidadeElementos = 9//getPositiveInteger('NÚMERO DE ELEMENTOS DA TORRE: ')
            const destribuicaoAleatoria = quantidadeAleatoria(quantidadeElementos,3)  // Distribui os elementos entre as 3 torres aleatoriamente
            let guardarTorreR = geradorTorres(destribuicaoAleatoria[0])  
            let guardarTorreG = geradorTorres(destribuicaoAleatoria[1])  
            let guardarTorreB = geradorTorres(destribuicaoAleatoria[2])  
            const totalMovimentosJogadores = []

            for (let p = 0; p < 2; p++) {
                let torreR = guardarTorreR.slice()
                let torreG = guardarTorreG.slice()
                let torreB = guardarTorreB.slice()
                let numeroMovimentosAtual = 0
                let escolhaPartida = ''
                
                while (!verificarVitoria(torreR, torreG, torreB)) {
                    console.log(exibirTorres(torreR, torreG, torreB))
                    console.log(gerarMenu(torreR, torreG, torreB))
                    
                    escolhaPartida = validarMovimento('OPÇÃO ESCOLHIDA: ', torreR, torreG, torreB)
                    if (escolhaPartida === '0') {
                        break
                    }

                    movimentar(escolhaPartida, torreR, torreG, torreB)
                    numeroMovimentosAtual++
                }

                if (escolhaPartida === '0') {
                    break
                }
                totalMovimentosJogadores.push(numeroMovimentosAtual)
                console.log(exibirTorres(torreR, torreG, torreB))
                console.log('--------------------------------------')
                console.log(`-- O JOGADOR [${p+1}] FEZ [${numeroMovimentosAtual}] MOVIMENTOS --`)

                if(p === 1) {
                    console.log(exibirPlacar(totalMovimentosJogadores))
                }
            }
            
        // Nível 3: cada torre começa com o mesmo número de elementos
        } else if (escolhaPrincipal === 3) {
            let quantidadeElementos = 9//getPositiveInteger('NÚMERO DE ELEMENTOS DA TORRE: ')
            let guardarTorreR = geradorTorres(quantidadeElementos)  
            let guardarTorreG = geradorTorres(quantidadeElementos)  
            let guardarTorreB = geradorTorres(quantidadeElementos)  
            const totalMovimentosJogadores = []
    
            for (let p = 0; p < 2; p++) {
                let torreR = guardarTorreR.slice()
                let torreG = guardarTorreG.slice()
                let torreB = guardarTorreB.slice()
                let numeroMovimentosAtual = 0
                let escolhaPartida = ''
                
                while (!verificarVitoria(torreR, torreG, torreB)) {
                    console.log(exibirTorres(torreR, torreG, torreB))
                    console.log(gerarMenu(torreR, torreG, torreB))
                    
                    escolhaPartida = validarMovimento('OPÇÃO ESCOLHIDA: ', torreR, torreG, torreB)
                    if (escolhaPartida === '0') {
                        break
                    }
        
                    movimentar(escolhaPartida, torreR, torreG, torreB)
                    numeroMovimentosAtual++
                }

                if (escolhaPartida === '0') {
                    break
                }
                totalMovimentosJogadores.push(numeroMovimentosAtual)
                console.log(exibirTorres(torreR, torreG, torreB))
                console.log('--------------------------------------')
                console.log(`-- O JOGADOR [${p+1}] FEZ [${numeroMovimentosAtual}] MOVIMENTOS --`)
        
                if(p === 1) {
                    console.log(exibirPlacar(totalMovimentosJogadores))
                }          
            }
        }
    }
}

main()
