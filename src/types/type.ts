export type CartType = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
};

export type CartItem = CartType & {
    quantity: number;
}