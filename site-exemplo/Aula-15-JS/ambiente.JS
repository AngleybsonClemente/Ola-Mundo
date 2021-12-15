 let num = [4,5,8] 
num.push(10)
num.sort()

//num[3] = 6 atribuindo a terceira posição do indici 

//num.push(10) adicionado a última posição do array 

//num.length faz contagem da variavel

//num.sort()  coloca os elementos em ordem crescente 

console.log(num)
console.log(`O array tem ${num.length} posições`)
console.log(`O valor da primeira posição é ${num[0]}`) // Mostrando o indici isoladamente 
let pos = num.indexOf(3) // indexOf (valor) procura um determinado valor dentro do array
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`O valor foi encontrado na posição ${pos}`)
}

