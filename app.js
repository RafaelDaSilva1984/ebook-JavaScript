// console.log('Rafael da Silva');
// let codar ;
// codar = 'Rafael da Silva';
// let nota = 10;
// console.log(codar, ' ', nota);
// let souDev = true;
// let churrasco = ['picanha','alcatra','maminha'];
// console.log(churrasco[1]);
// let festa = {
//     local:'Minha Casa',
//     data:'05/02/2024'
// }
// let convidados =[
//     {nome: 'Tais', idade: 25},
//     {nome: 'darlon', idade :40}
// ]
// festa.convidados = convidados
// console.log(festa)

// let n1 = 2
// let n2 = 3

// let soma = (n1+n2)
// let subtracao = (n1-n2)
// let multiplicacao = (n1 * n2)
// let divisao = (n1 / n2)
// let potencia = ( n1 ** n2)
// let resto = (n1 % n2)

// console.log("soma= " + soma);
// console.log("subtracao= " + subtracao);
// console.log("multiplicacao= " + multiplicacao);
// console.log("divisao= " + divisao);
// console.log("potencia= " + potencia);
// console.log("resto= " + resto);

// let valor1 = 15
// let valor2 = 12

// let maior = valor1 > valor2
// let menor = valor1 < valor2
// let igual = valor1 === valor2
// let maiorIgual = valor1 >= valor2
// let menorIgual = valor1 <= valor2
// let diferente = valor1 !== valor2

// console.log(`${valor1} é maior que ${valor2}: ${maior}`)
// console.log(`${valor1} é menor que ${valor2}: ${menor}`)
// console.log(`${valor1} é igual que ${valor2}: ${igual}`)
// console.log(`${valor1} é maiorIgual que ${valor2}: ${maiorIgual}`)
// console.log(`${valor1} é menorIgual que ${valor2}: ${menorIgual}`)
// console.log(`${valor1} é diferente que ${valor2}: ${diferente}`)

// console.log('! Negação NOT => inverter um valor');
// console.log(!true  )
// console.log('&& Conjunção AND');
// console.log(true&&true )
// console.log('|| Disjunção OR');
// console.log(true||true )

// const idade = 31
// if(idade >= 21 ){
//     console.log(`Adulto  = ${idade} anos`)
// }else if(idade >= 18){
//     console.log(`Maior de idade = ${idade} anos`)
// }else{
//     console.log(`Menor de idade = ${idade} anos`)
// }

// console.log('Operador ternário')
// console.log(idade >= 18? 'Maior' : 'Menor')


// console.log('Switch')
// let genero = ''
// switch(genero.toUpperCase()){
//     case 'M':
//     console.log('Masculino')
//     break
//     case 'F':
//     console.log('Feminino')
//     break
//     default:
//     console.log('Outros')
//     break
// }

// let soma = 0
// for(let i = 0; i <=5 ;i++){
//     console.log(i)
//     soma+=i
// }
// console.log(`Total soma do valores com FOR : ${soma}`)


// let soma2 = 0
// let i = 0
// while(i <=4){
//     console.log(i)
//     soma2+=i
//     i++
// }
// console.log(`Total soma do valores com WHILE : ${soma2}`)

// let conteudos = ['javascript', 'css','html','----']
// for(let i = 0 ; i < conteudos.length; i++){
//     console.log('--- Conteudos 1: ' + conteudos[i])
// }

// let conteudos2 = ['javascript', 'css','html','react','---']
// for(let i in conteudos2){
//     console.log('--- Conteudos 2 For in Iteração sobre chave: ' + conteudos2[i])
// }

// let conteudos3 = ['js', 'css','html','react','react native']
// for(let i of conteudos3){
//     console.log('--- Conteudos 3 For of Iteração sobre conteudo array: ' + i)
// }

// function calcular(){
//     soma = 1+2
//     return soma
// }
// console.log(calcular)
// console.log(calcular())

// function calcularParametros(valor1,valor2){
//     var soma =  valor1 + valor2
//     return soma
// }
// var soma = calcularParametros(2,2)
// var soma2 = calcularParametros(10,10)
// console.log(soma, soma2)

// console.log('Exercícios Functions')

// function calcularValores(valor1, valor2, valor3, valor4){
//     var somar = valor1+valor2+valor3+valor4
//     return somar
// }
// var executaSomar = calcularValores(5,6,7,8)
// console.log(executaSomar)
// var adicionaValor = 10
// console.log(executaSomar + adicionaValor)

// function life(){
//     console.log('Aprendendo JavaScript')
// }
// life()

// function tresValores(valor1, valor2, valor3){
//     var somarValores = valor1+valor2+valor3
//     if(valor1 == '' || valor2 =='' || valor3 == ''){
//         return 'Os valores não foram preenchidos corretamente!'
//     }
//     return somarValores
    
// }
// var entradaValores = tresValores(5,2,3)
// console.log(entradaValores)
// function multiplicador(){
//     if(isNaN(entradaValores)){
//         console.log('Error entrada de valores.')
//     }else{
//         var multiplicarValores = entradaValores * 4
//         console.log(multiplicarValores)
//     }
// }
// multiplicador()

// function opcoesCalculos(valor1,valor2,valor3,valor4){
// if (valor1 > 0 && valor2 > 0 && valor3 > 0 && valor4 > 0){
//     return parseInt((valor1 + valor2 ) / (valor3 + valor4)).toFixed(2) +' => 4 valores'
// }else if (valor1 > 0 && valor2 > 0 && valor3 > 0){
//     return ((valor1 + valor2) * valor3) +' => 3 valores'
// }else if (valor1 > 0 && valor2 > 0){
//     return (valor1 * valor2 ) +' => 2 valores'
// }else if(valor1 > 0){
//     return valor1 +' => 1 valor'
// }else{
//     return false +' => 0 valores'
// }
// }
// var valoresOpcoes = opcoesCalculos(22,4,6,8)
// console.log(valoresOpcoes)
// console.log(typeof(valoresOpcoes))

// const objtLiteral ={
//     foo: 'bar',
//     bar: 'baz'
// }
// console.log(objtLiteral)    


// const objtLiteral2 = {
//     foo: ['agua','coco','chimarrao'],
//     bar: function(){
//         return ' return de uma função dentro um objeto'
//     },
//     baz:'foobar'
// }

// console.log(objtLiteral2,objtLiteral2.bar())

// console.log('Destructi, abre o objeto e criar 2 váriáveis')
// //const {foo, bar} = objtLiteral2
// //console.log(foo)
// //console.log(bar())
// const{foo, ...objlt} = objtLiteral2
// console.log(objlt)
// const nObjt = {foo, ...objlt}
// console.log(nObjt)
// nObjt.foo = 'str'
// console.log(nObjt)
// delete nObjt.foo
// console.log(nObjt)

// // Declare uma variável que receba um objeto com as seguintes
// //propriedades:
// //a - front recebe a string "React"
// //b - back recebe a string "NodeJS"
// //c - lang recebe a string "JS"
// const atividadesProgramacao ={
//     front: 'React',
//     back: 'NodeJs',
//     lang:'JS'
// }
// console.log(atividadesProgramacao);

// // Faça o destructuring das duas primeiras propriedades e utilize o
// const{front, back, ...objDest}= atividadesProgramacao
// console.log(objDest)
// // spread operator para criar um novo objeto objNovo com o
// // restante.
// const newObjtDest = {front,back,...objDest}
// //Mostre no console as duas variáveis extraídas.
// console.log(newObjtDest)
// // dois objetos
// console.log(newObjtDest.front)
// console.log(newObjtDest.back)
// //Atribua a string "Javascript" a propriedade lang do objeto
// //objNovo.
// newObjtDest.lang = 'JavaScript'
// console.log(newObjtDest)

const strInicial= '   minha string    '
console.log(strInicial);
//posição da letra m na string indexOf vetor
console.log(strInicial.indexOf('m'))
console.log(strInicial[0])
console.log(strInicial.charAt(0))
console.log(strInicial.toLocaleLowerCase())
//.trim() retira espaço inicio e fim da string
console.log(strInicial.toLocaleLowerCase().trim())
console.log(strInicial.toLocaleUpperCase())
//.trim() retira espaço inicio e fim da string
console.log(strInicial.toLocaleUpperCase().trim())
// verifica se possui ou não o elemento string na cadeia string e retorno boolean
console.log(strInicial.includes('m'))
// .split() incluir separadores dentro da string
console.log(strInicial.split(" "))

//- Declare uma variável frase, que receba a string "Eu desenvolvo
//aplicações"
let variavel = "Eu desenvolvo aplicações"
// Mostre no console a posição da letra d na string acima.
console.log('A letra d está na posição ' + variavel.indexOf('d'))
//Mostre no console a letra que está na posição 17 da string.
console.log('A letra que está na posição é: ' + variavel[17])
//Declare uma variável que receba o valor da variável frase toda
//maiúscula.
console.log(variavel.toLocaleUpperCase().trim())