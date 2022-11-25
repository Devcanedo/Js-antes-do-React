// Short Syntax em Objetos

const name = 'Diego';
const age = 27;

// Antes
const user = {
 name: name,
 age: age,
};

//Depois
const user = {
 name,
 age,
}

document.body.innetText = JSON.stringify(user)