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