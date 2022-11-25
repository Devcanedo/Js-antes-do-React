const user = {
    name: 'Canedo',
    nickname: 'Rafa',
    idade: 27,
    address: {
     street: 'Rua Test',
     number: 303,
 },
};

// Rest Operator

const { name, ...rest } = user;

document.body.innerText = JSON.stringify(rest)


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Normal
const first = array[0];
const second = array[1];

document.body.innetText = JSON.stringify(first)

// Desestruturacao em arrays com rest
const [first, second, ...rest] = array;

document.body.innetText = JSON.stringify({ first, second, rest })

// Vamos supor, que queira pular um indice no array
// Nese caso, nao deixamos o número apenas sua virgula
const [first, , third, ...rest] = array;

document.body.innetText = JSON.stringify({ first, third, rest })
