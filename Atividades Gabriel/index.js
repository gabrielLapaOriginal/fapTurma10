const prompt = require('prompt-sync')();
const { redirect } = require('react-router-dom');
const readline = require('readline-sync');







const pokemons = [ 
    
    {
        nome: "Bulbassaur",
        ataq1: "Tackle",
        ataq2: "Overgrow"
    },
    {
        nome: "Charmander",
        ataq1: "Tackle",
        ataq2: "Blaze"
    },
    {
        nome: "Squirtle",
        ataq1: "Tackle",
        ataq2: "Torrent"
    }
]
let pokemon = ""
function randomPoke () {
    const indice = Math.floor(Math.random() * pokemons.length);
    return pokemon = pokemons[indice].nome;
}

const pokeApp = () =>{
    console.log("Bem vindo a sua jornada pokemon!\n ")
    const nome = readline.question("Qual o seu nome ?\n")
    console.log("Você acaba de jantar e esta tao ansioso para começar sua jornada que cogita ir imediatamente como voce deseja ir")
    const opcao1 = Number(readline.question("1-Quero ir bicicleta\n2-Quero ir andando\n3-Melhor ir amanha\n"))
    let cartao = true
    switch (opcao1) {
        case 1:
        console.log("Voce pegou a bike e tentou ir ao laboratorio...\n(Oh nao bandidos apareceram e te roubaram)\n Voce perdeu o seu cartão e sua bicicleta")    
        console.log("Voce volta triste para casa e decidi ir amanha")
        cartao = false
            break;

        case 2:
            console.log("Voce tentou ir andando ao laboratorio...\n(Oh nao bandidos apareceram e te roubaram)\n Voce perdeu o seu cartão") 
            console.log("Voce volta triste para casa e decidi ir amanha")
            cartao = false  
            break;
        
        case 3:
            console.log("Voce foi dormir e decidiu ir amanha...\n")  
            break;

    }
        console.log("Voce chega ao laboratorio do professor Carvalho pela manha")
        console.log(`Carvalho- Ola ${nome}!, finalmente chegou o dia de voce se tornar um mestre pokemon!!\n me de seu cartão e poderei te dar seu novo melhor amigo`)

        if(cartao){
            console.log("Voce entrega o cartao ao professor...\nCarvalho-Ooh da pra ver que voce cuidou bem dele, aqui tenho 3 opcoes de pokemon para voce")
            pokemon = pokemons[Number(readline.question("Selecione seu pokemon:\n0-Bulbasaur\n1-Charmander\n2-Squirtle"))].nome
            console.log(`Parabens voce recebeu um ${pokemon}!`)
            // pokemons[indice].nome
            console.log(`Na saida do laboratorio pokemon o professor sai com voce, voces pegam caminhos opostos... \n mas espere voce ouve um grito e vira assustado, o professor está sendo atacado por um ratata selvagem!!!\n voce corre para ajuda-lo e joga o seu ${pokemon} recem adquirido`)
        }else{
            console.log(`Carvalho- Oh não... parece que voce nao tem seu cartao, infelizmente nao poderei dar o seu pokemon sem ele ${nome}\n Voce sai do laboratorio com o professor, triste por nao ter seu pokemon\nCarvalho- Lamento ${nome}, mas se voce retirar a segunda via do seu cartao pokemon pode retornar que lhe darei seu companheiro de batalhas nao desista!\nVoce sai triste na direção oposta ao professor...\n mas espere voce ouve um grito e vira assustado, o professor está sendo atacado por um ratata selvagem!!!\n Voce corre para ajuda-lo quando ve sua bolsa no chão e três pokebolas jogadas ao lado dela voce pega a primeira e a joga e dela sai um...`)
            randomPoke()
            console.log(`Parabens voce recebeu um ${pokemon}!`)
        }
}
pokeApp()

//const n1 = Number(readline.question("Qual o seu primeiro numero ?\n"))
// const n2 = Number(readline.question("Qual o seu segundo numero ?\n"))
// const n3 = Number(readline.question("Qual o seu terceiro numero ?\n"))
// let maior
// let menor
// let media = (n1 + n2 + n3) /3
// let meio

// if(n1>n2 && n1>n3){
//     maior = n1
//     console.log(`O maior numero é o primeiro = ${maior}`)
// }else if (n2>n1 && n2>n3){
//     maior = n2
//     console.log(`O maior numero é o segubdo = ${maior}`)
// }
// else if (n3>n1 && n3>n2){
//     maior = n3
//     console.log(`O maior numero é o terceiro = ${maior}`)
// }

// if(n1<n2 && n1<n3){
//     menor = n1
//     console.log(`O menor numero é o primeiro = ${menor}`)
// }else if (n2<n1 && n2<n3){
//     menor = n2
//     console.log(`O menor numero é o segubdo = ${menor}`)
// }
// else if (n3<n1 && n3<n2){
//     menor = n3
//     console.log(`O menor numero é o terceiro = ${menor}`)
// }
// if(n1 != maior && n1 != menor){
//     meio = n1
//     console.log(`O numero do meio é o primeiro = ${meio}`)
// } else if(n2 != maior && n2 != menor){
//     meio = n2
//     console.log(`O numero do meio é o segundo = ${meio}`)
// }else if(n3 != maior && n3 != menor){
//     meio = n3
//     console.log(`O numero do meio é o terceiro = ${meio}`)
// }

// console.log(`A media é ${media}`)


// 6 - Escreva um código que simula um Chat. Nesse código, o usuário criará um menu interativo com 3 opções de resposta. Em cada resposta terá que haver outras formas de interação final. Antes de terminar, o código deve informar que irá ser encerrado.



// const cinema = ()=> {
//     const opcao1 = Number(readline.question("Ola selecione uma opcao:\n1-ingresso VIP (com uma poltrona)\n2-ingresso standard (cadeira comum)\n"))
//     const opcao2 = Number(readline.question("Voce deseja um combo promocional de pipoca e refrigerante ?\n1-sim\n2-nao\n"))
//     switch (`${opcao1}-${opcao2}`) {
//         case "1-1":
//             console.log(`Você selecionou o Ingresso VIP com pipoca: : “Valor: 110 reais”`)
//             break;
//         case "1-2":
//             console.log(`Você selecionou o Ingresso VIP sem pipoca: “Valor: 80 reais”`)
//         break;

//         case "2-1":
//             console.log(`Você selecionou o Ingresso standard com pipoca: “Valor: 70 reais”`)
//         break;

//         case "2-2":
//             console.log(`Ingresso standard sem pipoca: “Valor: 40 reais”`)
//         break;
        
//         default:
//             console.log(`Opção invalida.`)
//             break;
//     }
// }
// cinema()

// 5 - Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP (com uma poltrona) e um ingresso standard (cadeira comum). É possível optar também por um combo promocional de pipoca e refrigerante ou não. Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de pipoca (opção 1) ou não (opção 2). O programa deverá imprimir uma mensagem para o usuário de acordo com as seguintes regras:
// Ingresso VIP sem pipoca: “Valor: 80 reais”;
// Ingresso VIP com pipoca: : “Valor: 110 reais”;
// Ingresso standard sem pipoca: “Valor: 40 reais”;
// Ingresso standard com pipoca: “Valor: 70 reais”;


// const aprov = ()=>{
//     const numero1 = Number(prompt("Informe sua primeira nota: "))
//     const numero2 = Number(prompt("Informe sua segunda nota: "))
//     const resultado = (numero1 + numero2) / 2
//     console.log(resultado > 7 ? "Parabens você foi aprovado" : "Infelizmente você foi de base")
// }
// aprov()



// const maiorMenor = ()=>{
//     const numero1 = prompt("Informe um número: ")
//     const numero2 = prompt("Informe outro número: ")
//     console.log(numero1 > numero2 ? `O número ${numero1} é maior` : `O número ${numero2} é maior`)
// }
// maiorMenor()



// const resultado = ()=>{
//     const numero = Number(prompt("Informe um número para que eu informe se ele é par ou impar: "));
//     console.log(numero % 2 ? "impar" : "par")
// }
// resultado()



// const cotação = ()=>{
//     let resultado = 0;
//     const cotacao = Number(prompt("Qual a cotação atual do dolar ? "));
//     const money = Number(prompt("Quanto você tem disponivel para converção "));
//     console.log("Olá \n1-para converter dolar pra real. \n2-para converter real para dolar\n");
//     const opcao = prompt("sua opção: ");
//     if(opcao == 1){
//         resultado = money * cotacao;
//         console.log(`Você pode comprar R$${resultado.toFixed(2)} reais`);
//     }else{
//         resultado = money / cotacao;
//         console.log(`Você pode comprar $${resultado.toFixed(2)} dolares`)
//     }
    
// }
// cotação()








// calcular imc
// const peso = 60;
// const altura = 1.7;
// const imc = peso / (altura**2);
// console.log(`Esse é seu imc: ${imc.toFixed(2)}`);

// const name = prompt("Digite seu nome: ");
// const peso = prompt("Digite seu peso: ");
// const altura = prompt("Digite sua altura: ");
// const imc = peso / (altura**2);
// console.log(`Olá ${name} seu IMC é: ${imc.toFixed(2)}`);

// console.log("Olá sou o mago da internet, pense em um numero")
// let misterio = prompt("Em qual numero voce pensou ? ")
// console.log(`Voce pensou no numero ${misterio}`)

// function VerifyCnh (){
//     const name = prompt("Olá qual o seu nome ? ")
//     const idade =prompt(`Qual a sua idade ${name} ? `);

//     if(idade >= 18){
//         console.log(`Parabens ${name} voce pode tirar CNH`);
//     }
//     else{
//         console.log(`Desculpe ${name} voce ainda não pode tirar CNH`);
//     }
// }
// VerifyCnh()