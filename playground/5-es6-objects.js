const userName = "Kirsty";
const userAge = 30;

const user = {
  name: userName,
  age: userAge,
  location: "London",
};

console.log(user);

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { stock, rating = 8 } = product;

console.log(stock, rating);

const transaction = (type, { label, stock }) => {
    
    console.log(type, label, stock);
}

transaction('order', product)