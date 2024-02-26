export function calculateTotalPrice(
  cart: string[],
  products: any[],
  isCart: boolean
): number {
  if (!isCart) {
    return 0;
  }

  let total = 0;
  cart.forEach((productId) => {
    const product = products.find((product: any) => product.id === productId);
    if (product) {
      total += product.price;
    }
  });
  return total;
}

export function addToCart(productId: string, cart: string[]): string[] {
  return [...cart, productId];
}
