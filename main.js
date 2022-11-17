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
 idade: 27,
 adress: {
  street: 'Rua Test',
  number: 303,
 },
};

// COMO MANIPULAR OBJETOS

// Método 1
document.body.innerText = ('name' in user)