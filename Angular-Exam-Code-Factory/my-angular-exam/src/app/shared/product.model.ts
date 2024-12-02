export interface ProductModel {
    name: string;
    ingredients: string[];
    availableToOrder: boolean;
    imageUrl: string;
    price: number;
    qtty: number;
    description: string;
}