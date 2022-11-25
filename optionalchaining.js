const user = {
    name: 'Canedo',
    nickname: 'Rafa',
    idade: 27,
    address: {
     street: 'Rua Test',
     number: 303,
     //zip: {
     //   code: '87869000',
     //   city: 'Nome Cidade'
     // }
 },
};

// Melhotrando o error no Js Puro
// Se o address existir, retornar o address.street se nao mostrar 'Nao Informado'
document.body.innerText = user.address ? user.address.street : 'Nao Informado'

// Melhorando o error Modo Super
// Digamos que existe mais alguma info no objeto, seria o ZIP
document.body.innerText = user.address.zip.code

// Talvez assim ?
document.body.innerText = user.address
 ? user.address.zip
  ? user.address.zip.code
  : 'Nao Informado'
 : 'Nao Informado'

// Ficaria assim com Optinal Chaining
// Colocamos um '?' em cada sessao que pode nao existir
document.body.innerText = user.address?.zip?.code ?? 'Nao Informado';

const user = {
    name: 'Canedo',
    nickname: 'Rafa',
    idade: 27,
    address: {
     street: 'Rua Test',
     number: 303,
     //zip: {
     //   code: '87869000',
     //   city: 'Nome Cidade'
     // },
     showFullAddress() {
        return 'ok';
     },
 },
};

// Se a function existir
document.body.innerText = user.address?.showFullAddress()

// Se tenha duvida da function existir
document.body.innerText = user.address?.showFullAddress?.()


// Buscando  a propriedade key dentro de user
const key = 'name';
const key = 'street';

document.body.innerText = user[key]
document.body.innerText = user.address[key]