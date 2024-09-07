import { question } from "readline-sync";

export function input(text){
    return question(text)
}

export function print(text){
    return console.log(text)
}

export function getIntegerBetween(text,min,max){
    let number = parseInt(input(text))
    while (number < min || number > max){
        print('Valor inválido!')
        number = parseInt(input(text))
    }
    return number
}

export function getPositiveInteger(text){
    let number = parseInt(input(text))
    while (number < 0){
        print('Valor inválido!')
        number = parseInt(input(text))
    }
    return number
}

export function indexMenor(array){
    let posicao = 0
    for(let i = 1; i < array.length;i++){
        if(array[i] < array[posicao] ){
            posicao = i
        }
    }
    return posicao
}


export function myReduce(func,array,valorInicial){
    let acomulador = valorInicial

    for(let i = 0;i < array.length;i++){
        acomulador = func(acomulador,array[i])
    }
    return acomulador
}