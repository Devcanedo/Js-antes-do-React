// imprimir algo na tela
// document.body.innerText = 'Hello World'
// console.log('')

// Exibindo dados simples
const idade = 22

// Aqui ele mostra qualquer valor que está em const
document.body.innerText = 'Sua idade é: ' + idade;

// || = ou
// 0, '', [], false, undefined, null => falsy(valores nao válido
// para quando trazemos para um operador ||)
document.body.innerText = 'Sua idade é: ' + (idade || 'Nao informado');

// NULLISH COALESCING OPERATOR
// Olha para valores que nao sao válidos
// aqui 0 conta. Entao se o valor const for 0ele aprece, se for null aparece
// como nao informado
document.body.innerText = 'Sua idade é: ' + (idade ?? 'Nao informado');

///////////////////////// OBJETOS /////////////////////////

// Armezena dados entre chaves.
const user = {
 name: 'Canedo',
 nickname: 'Rafa',
 idade: 27,
 address: {
  street: 'Rua Test',
  number: 303,
 },
};

// COMO MANIPULAR OBJETOS

// Método 1
document.body.innerText = ('name' in user)

// Método 2
// Formado JSON, valores do object
document.body.innerText = JSON.stringify(Object.values(user))

// Valores objetc via Const
const address = user.address
docoument.body.innerText = JSON.stringify(address)

// Desestruturacao via Const
const { address, idade } = user
document.body.innerText = JSON.stringify({ address, idade })

// Type Object
const { address, idade: age } = user
document.body.innerText = JSON.stringify({ address, age })

// Object via Function
function mostraIdade(user) {
return user.idade;
}

document.body.innerText = mostraIdade(user)

// Desestruturacao via Function
function mostraIdade({ idade }) {
    return idade;
    }
    
document.body.innerText = mostraIdade(user)