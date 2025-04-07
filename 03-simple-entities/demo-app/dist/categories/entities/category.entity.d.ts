import { Product } from "../../product/entities/product.entity";
export declare class Category {
    id: number;
    name: string;
    description?: string;
    image: string;
    createdAt: Date;
    updatesAt: Date;
    products: Product[];
}
