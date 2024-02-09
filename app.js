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

// const strInicial= '   minha string    '
// console.log(strInicial);
// //posição da letra m na string indexOf vetor
// console.log(strInicial.indexOf('m'))
// console.log(strInicial[0])
// console.log(strInicial.charAt(0))
// console.log(strInicial.toLocaleLowerCase())
// //.trim() retira espaço inicio e fim da string
// console.log(strInicial.toLocaleLowerCase().trim())
// console.log(strInicial.toLocaleUpperCase())
// //.trim() retira espaço inicio e fim da string
// console.log(strInicial.toLocaleUpperCase().trim())
// // verifica se possui ou não o elemento string na cadeia string e retorno boolean
// console.log(strInicial.includes('m'))
// // .split() incluir separadores dentro da string
// console.log(strInicial.split(" "))

// //- Declare uma variável frase, que receba a string "Eu desenvolvo
// //aplicações"
// let variavel = "Eu desenvolvo aplicações"
// // Mostre no console a posição da letra d na string acima.
// console.log('A letra d está na posição ' + variavel.indexOf('d'))
// //Mostre no console a letra que está na posição 17 da string.
// console.log('A letra que está na posição é: ' + variavel[17])
// //Declare uma variável que receba o valor da variável frase toda
// //maiúscula.
// console.log(variavel.toLocaleUpperCase().trim())

// // arrays e Vetores
// const arr1 = Array(1,true,'str',{}, function(){})
// console.log(arr1)

// const arr = [1,true,'str',{}, function(){}]
// console.log(arr)

// // forEach = iterar sobre cada item do array nome: arr
// arr.forEach(function(item){
//     console.log('Item: ', item)
// })

// // retorna um novo array sem alterar original, substituido os item pelo retorno
// console.log(arr.map(function(item){    
//     return typeof item === 'function' ? 'era uma função': item 
// }))

// // filter retirar itens do array exemplo a function
// const array3 = arr.filter(function(item){
//     return typeof item !== 'function' 
// })
// console.log(array3)

// // push inserir elementos no array e altera o array original
// arr.push('nova str')
// console.log(arr, ' uso push antes do pop')
// // pop remove o último item do array
// console.log(arr.pop())
// console.log(arr, ' depois do pop retirou a nova str')
// // shift remove o primeiro item do array
// console.log(arr.shift())
// console.log(arr, ' depois do shift retirou 1')

// // destruct de um array
// console.log(arr)
// //const [isbool, str, obj, fn] = arr
// // console.log(isbool)
// // console.log(str)
// // console.log(obj)
// // console.log(fn)
// const[isbool, ...restoarray] = arr
// console.log(restoarray)
// const narr = [isbool, ...restoarray]
// console.log(narr)

// // Array reduce - não altera valor original, deve iniciar com uma function, e ter o ponto de inicio em 0 zero como padrão
// // memo = primeiro valor nesse caso = 0 'inicial, o currente é o valor da posição de index 0
// const arr = [1,4,5,5,7,9]
// const result = arr.reduce(function(memo, current, index){
//     console.log('index:', index)
//     return memo + current
// },0)
// console.log('O resultado da soma de valores de array é: ', result)

// Ordenação de arrays
// const arr = [3,2,1, 'z', 'x']
// const sorted = arr.sort()
// console.log(arr)

// const arr1 =[2,1,4]
// const sorted1 = arr1.sort(function(direita, esquerda){
//     // return 0,1,-1
//     if(direita === esquerda){
//         return 0 // fica na mesma ordem
//         // retorna 1 para ordem crescente
//      } return direita > esquerda ? 1 : -1
//         // retorna -1 para ordem decrescente
//         //return direita > esquerda ? -1 : 11
// })
// console.log(sorted1)

// // 1- Declare uma variável que receba um array (Vetor) com os
// // seguintes valores: String, Função, objeto, número, booleano e
// // array.
// const arr = ['str',function(){},{},2,true,[]]
// // 2- Mostre no console a quantidade de itens no array.
// console.log(arr.length,'elementos populam o array')
// // 3- Altere o valor do número para 31.
// arr[3]=31
// console.log(arr)
// // 4- Remova o objeto do array.
// const removeObj = arr.filter(function(item){
//     return typeof item === 'object' ? false: item
// })
// console.log(removeObj)
// // 5- Adicione uma string com seu nome.
// arr.push('Rafael da Silva')
// console.log(arr)
// // 6- Remova o primeiro item do array.
// arr.shift()
// console.log(arr)
// // 7- Remova o último item do array.
// arr.pop()
// console.log(arr)

// // 1- Declare uma variável que receba um array com 7 números.
// const arr7 = [1,2,3,4,5,6,7]
// console.log(arr7)
// // 2- Declare uma função que receba um array como argumento e
// // retorne a soma de todos os valores do array utilizando o
// // método reduce.
// const resultadoSoma = arr7.reduce(function(memo,current,index){
//     return memo + current
// },0)
// // 3- A função acima deverá exibir no console a frase: "A soma de odos os valores do array é igual a (valor)!"
// console.log('"A soma de todos os valores do array é igual a ',resultadoSoma)


// // 1- Declare uma variável que receba um array com 5 números.
// const array5 = [5,7,12,9,1]
// // 2- Declare uma função que receba um array como argumento e
// // retorne o mesmo ordenado de forma crescente.
// const arr5Crescente = array5.sort(function(dir, esq){
//     if(dir === esq){
//         return 0
//     } return dir > esq ? 1 : -1
// })

// // 3- Declare uma função que receba um array como argumento e
// // retorne o mesmo ordenado de forma decrescente.
// const arr5Decrescente = array5.sort(function(dir, esq){
//     if(dir === esq){
//         return 0
//     } return dir > esq ? -1 : 1
// })

// // 4- Mostre no console o resultado das duas funções acima.
// console.log('Inicial ',array5)
// console.log('Crescente ',arr5Crescente, 'Decrescente ', arr5Decrescente)

// Array splice e slice
// const arr = ['a','b','c','d','e','f']
// console.log(arr);
// console.log(arr.splice(1,2,'x','y')) // remove 1 valor no indice 3, apartir do segundo parametro é adição
// console.log(arr);
// console.log(arr.slice(1,3)) //somente exclui qtd de valores 
// console.log(arr.slice(-0)) // remove na ordem decrescente

// // Etapas:
// // 1- Declare uma variável que receba um array com 10 números.
// const arr10 = [10,9,8,7,6,3,2,1,5,4,11]
// // 2- Declare uma função que receba um array como argumento,
// // remova os dois primeiros valores do array e retorne a soma de todo o restante utilizando o método reduce.
// // 3- Mostre no console a mensagem "O valor final é (valor)!" ao
// // invocar a função acima.
// console.log('Original arr10 ', arr10)
// function arrayArgumento(array){
//     const restante= array.slice(2)    
//     console.log(' Array método splice', arr10)
//     const soma = restante.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
//     return soma;
//     }
//     const resultado = arrayArgumento(arr10)
//     console.log('O valor final é: ', resultado)
// // 4- Declare uma função que receba um array como argumento,
// // remova o 4º valor do array e adicione 10, 20 e 28.
// console.log('Novos Exercícios')
// const arr5 = [5,9,1,7]
// console.log(`Original = ${arr5}`)
// function arrayRestante(array1, somador){
//     const retirado = array1.splice(3,1)
//     console.log(`Retirado 4º valor = ${retirado}`)
//     array1.push(10,20,28)
//     somador = array1.reduce((a,b)=> a+b,0)
//     return [array1, somador]
// }
// const revelarResultado =arrayRestante(arr5)  
// const qtdvalores = (revelarResultado[0].length) 
// // 5- Mostre no console a frase: " O array tem (quantidade de itens)
// // itens e são eles: (array)" .
// console.log(`O array tem ${qtdvalores} itens e são eles:, ${revelarResultado[0]}, total de: ${revelarResultado[1]}`)
// // 6- Crie a variável testSlice e atribua os dois últimos números do
// // array utilizando o método slice.
// console.log(`Original = ${arr5}`)
// const testSlice = arr5.slice(4)
// const somarSlice = testSlice.reduce((a,b)=>a+b,0)
// console.log(`Slice ${testSlice} e sua soma = ${somarSlice} `)

// // Functions Padrão
// const arr = [1,true,'str',{},function(){},[]]
// const arr2 = arr.map(function(item){
//     return typeof item === 'function' ? 'era uma funcao' : item
// })
// console.log(arr2)
// // arrow functions
// const arr1 = [1,true,'str',{},function(){},[]]
// const arr3 = arr1.map(item =>typeof item === 'function' ? 'era uma funcao' : item
// )
// console.log(arr3)
// // exempçlos arrow functions
// const arr10 = [1,true,'str',{},function(){},[]]
// const iterador = item =>typeof item === 'function' ? 'era uma funcao' : item
// const arr11 = arr10.map(iterador)
// console.log(arr11)

// const soma =(n1, n2, n3=15) => n1 + n2 + n3 // parâmetros default
// console.log(soma(5,10))

// //spreed operators
// const somar =(...nums)=>console.log(nums)
// console.log(somar(10,11,12,13,14,15))

// // 1- Declare a variável somaFun.
// // 2- Atribua a variável somaFun uma arow function que receba 3
// // parâmetros e retorne a soma dos dois primeiros multiplicado
// // pelo terceiro.
// let somafun =(n1,n2,n3) => (n1+n2+n3) * n3
// const resultado = somafun(2,3,5)
// console.log(`O resultado é: ${resultado}`)
// // 3- Declare uma variável e atribua uma arrow function que receba
// // um valor indeterminado de parâmetros e retorne a soma de todos eles utilizando o método reduce.
// let valorInd =((...nums) => somador = nums.reduce((a,b,i)=> a + b,0))
// // 4- Declare as variáveis e atribua os respectivos valores: a = 10,
// // b = 25, c= 40 e d = 55.
// let valor = valorInd(10,25,40,55)
// // 5- Mostre no console a frase "A soma das variáveis é (valor)",
// // utilizando a arrow function acima.
// console.log(`A soma das variáveis é = ${valor},utilizando a arrow function acima`)

//Classes

// class Calc {
//     constructor(){
//         this.history = []
//         console.log(this)
//     }
//     soma(n1,n2){
//         const result = n1+n2
//         this.history.push(result)
//         return result
//     }
//     sub(n1,n2){
//         const result = n1-n2
//         this.history.push(result)
//         return result
//     }
//     mult(n1,n2){
//         const result = n1*n2
//         this.history.push(result)
//         return result
//     }
//     div(n1,n2){
//         const result = n1/n2
//         this.history.push(result)
//         return result
//     }
// }
// const calc = new Calc()
// console.log(calc.soma(5,5),'soma')
// console.log(calc.soma(3,5))
// console.log(calc.soma(2,5))
// console.log(calc.sub(5,5),'subtracao')
// console.log(calc.sub(3,5))
// console.log(calc.sub(2,5))
// console.log(calc.mult(5,5),'multiplicacao')
// console.log(calc.mult(3,5))
// console.log(calc.mult(2,5),'divisao')
// console.log(calc.div(3,5))
// console.log(calc.div(2,5))
// console.log(calc.div(3,5))

// class CalcCientifica extends Calc{ //usando herança da classe Calc
//     constructor(){
//         super() // método de classe
//     }
//     sub(n1,n2){
//         const result = n1-n2
//         this.history.push(result)
//         return result
//     }
//     mult(n1,n2){
//         const result = n1*n2
//         this.history.push(result)
//         return result
//     }
//     div(n1,n2){
//         const result = n1/n2
//         this.history.push(result)
//         return result
//     }
// }
// const calcC = new CalcCientifica()
// console.log(calcC.soma(5,5),'soma')
// console.log(calcC.soma(3,5))
// console.log(calcC.soma(2,5))
// console.log(calcC.sub(5,5),'subtracao')
// console.log(calcC.sub(3,5))
// console.log(calcC.sub(2,5))
// console.log(calcC.mult(5,5),'multiplicacao')
// console.log(calcC.mult(3,5))
// console.log(calcC.mult(2,5),'divisao')
// console.log(calcC.div(3,5))
// console.log(calcC.div(2,5))
// console.log(calcC.div(3,5))

// Exercícios
// 1- Instancie uma classe com nome calcFun.
// 2- Atribua uma propriedade sendo ela um array vazio.
// 3- Atribua a propriedade soma, que recebe dois valores e retorne a
// soma.
// 4- Atribua a propriedade sub, que recebe dois valores e
// retorne a subtração.
// 5- Atribua a propriedade mult, que recebe dois valores e retorne a
// multiplicação.
// 6- Atribua a propriedade div, que recebe dois valores e retorne
// a divisão.
// 7- O resultado de cada operação executada deve ser registrada no
// array criado.
// 8- Declare uma variável calc e instancie a classe calcFun.
// 9- Mostre no console o resultado de todas as operações da
// classe instanciada.
// class calcFun{
//     constructor(){
//         this.history = [] //armazena valor no array history
//         console.log(this)
//     }
//         soma(vl1,vl2){
//         const result= (vl1+vl2)
//         this.history.push(result)
//         return result
//     }
//     sub(vl1,vl2){
//         const result= (vl1-vl2)
//         this.history.push(result)
//         return result
//     }
//     mult(vl1,vl2){
//         const result= (vl1*vl2)
//         this.history.push(result)
//         return result
//     }
//     div(vl1,vl2){
//         const result= (vl1/vl2)
//         this.history.push(result)
//         return result
//     }
// }
//     const calc = new calcFun() // precisa da palavra reservada new
//     console.log(calc.soma(2,3),'soma')
//     console.log(calc.sub(2,3),'sub')
//     console.log(calc.mult(2,3),'mult')
//     console.log(calc.div(2,3),'div')
// // 10- Instancie uma classe com nome calcSmart que receba por
// // herança as propriedades da classe calcFun.
// // 11- Declare uma variável calcS e instancie a classe calcSmart
// // 12- Mostre no console o resultado de todas as operações da classe
// // instanciada.

// class CalcSmart extends calcFun{
//     constructor(){
//         super()
//     }
//     soma(vl1,vl2){
//     const result = (vl1+vl2)
//     this.history.push(result) 
//     return result
//     }
//         soma(vl1,vl2){
//         const result = (vl1+vl2)
//         this.history.push(result) //armazena valor no array history
//         return result
//         }
//         sub(vl1,vl2){
//         const result = (vl1-vl2)
//         this.history.push(result)
//         return result
//         }
//         mult(vl1,vl2){
//         const result = (vl1*vl2)
//         this.history.push(result)
//         return result
//         }
//         div(vl1,vl2){
//         const result = (vl1/vl2)
//         this.history.push(result) 
//         return result
//         }
//     }

// const calcS = new CalcSmart() // precisa da palavra reservada new
// console.log(calcS.soma(2,3),'soma')
// console.log(calcS.sub(2,3),'sub')
// console.log(calcS.mult(2,3),'mult')
// console.log(calcS.div(2,3),'div')

//setTimeout
// callback function que tem delay para sua realização, definida em milisegundos
// console.log('Inicio')
// let timeOut = setTimeout(() =>console.log('TimeOut Depois de 2 segundos'),2000)
// let interval = setInterval(function(){
//     console.log('Interval De 2 em 2 segundos');
// })
// clearTimeout(timeOut) // bloquear o setTimeOut
// clearInterval(interval) // bloquear o setInterval

// console.log('Fim')

// // 1- Declare uma variável grabFruit e atribua uma arrow function.
// // 2- A função deve mostrar "Star! "no console.
// // 3- Declare a variável fruit e atribua o valor 0.
// // 4- Utilizando o setInterval, mostre no console a frase " Grab
// // (valor) fruits" e adicione 1 a variável fruit a cada segundo.
// // 5- Utilizando o setTimeout, pare a contagem 20 segundos depois
// // de iniciar.
// // 6- Mostre no console "Game over!" quando finalizar a
// // contagem.
// // 7- Invoque a função.

// let grabFruit =(()=> console.log('Star'))
// grabFruit()
// let fruit = 0
// let intervalo =setInterval(()=>console.log(`Grab ${++fruit} fruits`))
// setTimeout(()=>clearInterval(intervalo),20)
// let timeOut2 = setTimeout(() =>console.log('Game Over'),1000)

// Promisse = Pendência, promessa de resolução
// console.log('Início')
// const promise = new Promise ((resolve, reject)=>{
//     console.log('Entrou na promise')
//     setTimeout(()=>resolve('Funcionou'),2000)
//     setTimeout(()=>reject('Deu Erro'),2000)
// })
// // tratamento da promise
// promise
// .then(str => console.log('Ok Promise:', str))
// .catch(error => console.log('Hum !!!!', error))
// console.log('Fim')

// Declare uma função que recebe a idade de um usuário e
// retorna uma Promise que depois de 2 segundos retornará se
// usuário é maior ou não que 18 anos. Se o usuário ter mais que
// 18 anos de idade o resultado deve cair no .then , caso
// contrário, no .catch

// function idade(idade){
//     const promise = new Promise((resolve, reject)=>{
//         idade >= 18 ? setTimeout(()=>resolve('Maior Idade'),2000) : setTimeout(()=>reject('Menor Idade'),2000)
        
//     })
    
//     promise
//     .then(str => console.log(idade,'Anos, ',str))
//     .catch(error => console.log(idade, 'Anos, ',error))
// }
// idade(11)

//Async / Await

// const promise = () => new Promise ((resolve, reject)=>{
//     console.log('Entrou na promise async ')
//     setTimeout(()=>resolve('Funcionou async'),2000)
//     setTimeout(()=>reject('Deu Erro async'),2000)
// })
// async function main(){
//     console.log('Início async')
// try{
//     const result = await promise()
//     console.log('Ok await; ',result)
// }catch(error){
//     console.log('Hum !!!!', error)
// }
// console.log('Fim')
// }
// main()

//Fetch Api
// //sincrona
// async function main(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const data = await response.json()
//         console.log(data)
//     }catch(error){
//         console.log('Error', error)
//     }
// }
// main()

// //assincrona
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response =>response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('Error', error))



// Usando Dom 
// Capturando os elementos
console.log('Capturando os elementos')
let inputN1 = document.querySelector('input#n1')
console.log(inputN1);
let inputN2 = document.querySelector('input#n2')
console.log(inputN2);
let buttonCalcular = document.querySelector('button')
console.log(buttonCalcular)

// criando Elementos
let appElement = document.querySelector('#app') //captura elemento div #app
let pElement = document.createElement('p') //cria um element p
pElement.innerHTML='Não tem nenhum Cálculo'
pElement.style.fontSize = '18px'
pElement.style.textTransform = 'uppercase'
appElement.appendChild(pElement) //adiciona o element p criado na div #app

function funcaoCalcular(){
    const n1 = Number(inputN1.value)
    const n2 = Number(inputN2.value)
    const soma = n1 + n2
    pElement.innerHTML = `${n1} + ${n2} = ${soma}`
    return soma
}
 function mostrarResultado() {
     let soma = funcaoCalcular(n1,n2)
     console.log(`A soma é = ${soma}`)
 }

// Persistência de Dados browser
// armazenar os dados de login até o logout

//Local Storage
//armazena chave e valor
const valor = 1984
localStorage.setItem('chave',valor)
const user = 'Rafael' // variavel
localStorage.setItem('user', user) // chave = user e valor a variavel
console.log(localStorage.getItem('user'))
console.log(localStorage.getItem('chave'))
localStorage.clear()

// Persistência com JSON
const usuario ={
    name:'Rafael Silva',
    company:'life'//
}
localStorage.setItem('usuario', JSON.stringify(usuario))
//console.log(localStorage.getItem('usuario')) // mostra a conversão de json para string
// reverter para json
let recuperado = localStorage.getItem('usuario') // variavel com valores do usuario como string
console.log(typeof(recuperado),(recuperado),'---formato string') // mostra o tipo da variavel recuperado
console.log(JSON.parse(recuperado),'---formato json') // converte para JSON

// persistência com vetor

const valores =['str', 21, true, {}, ()=>{}]
localStorage.setItem('valores', JSON.stringify(valores))
let valoresRecuperados = localStorage.getItem('valores')
console.log(typeof(valoresRecuperados),(valoresRecuperados),'---formato de string')
console.log(JSON.parse(valoresRecuperados), '---formato json')


