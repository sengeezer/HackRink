type Product = {
  name: string;
  price: number;
  quantity: number;
};

const cart: Product[] = [
  { name: "Notebook", price: 7.5, quantity: 2 },
  { name: "Pen", price: 1.99, quantity: 5 },
];

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

console.log("Cart total:", total.toFixed(2));