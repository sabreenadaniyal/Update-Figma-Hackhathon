export interface Product {
    [x: string]: any;
    _id: string; // Unique identifier
    category: string;
    name: string; // Name of the product
    price: number; // Price per unit
    inventory: number; // Quantity of the product in the cart
    imageUrl?: string; // Optional image URL
  }
  