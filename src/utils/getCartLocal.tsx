export const getCartFromLocalStorage = () => {
  const dataCart = localStorage.getItem('cart_items');
  return dataCart ? JSON.parse(dataCart) : [];
};
