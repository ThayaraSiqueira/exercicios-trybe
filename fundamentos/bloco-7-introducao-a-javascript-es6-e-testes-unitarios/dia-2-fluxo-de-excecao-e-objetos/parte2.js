const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
const nameDelivery = order.order.delivery.deliveryPerson;
const nameOrder = order.name;
const phone = order.phoneNumber;
const street = order.address.street;
const number = order.address.number;
const apart = order.address.apartment;
console.log(`Olá ${nameDelivery}, entrega para: ${nameOrder}, Telefone: ${phone}, R. ${street}, No: ${number}, AP: ${apart}`);
}

customerInfo(order);

const orderModifier = (order) => {
const newClient = order.name = 'Luiz Silva'
const pizzas = Object.keys(order.order.pizza);
const drinks = order.order.drinks.coke.type;
const newTotal = order.payment.total = '50';
console.log(`Olá ${newClient}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);

// Agora você vai fazer alguns exercícios de fixação.
// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
