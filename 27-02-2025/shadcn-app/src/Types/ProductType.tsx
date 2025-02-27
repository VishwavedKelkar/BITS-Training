export type ProductType = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity?: number;
};

export interface CartItem {
    id: string;
    image: string;
    title: string;
    price: number;
    quantity: number;
}

export interface CartState {
    cart: CartItem[];
    addToCart: (item: ProductType) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    setCart: (items: CartItem[]) => void;
}
