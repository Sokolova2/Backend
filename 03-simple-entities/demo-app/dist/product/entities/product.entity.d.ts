import { Category } from "../../categories/entities/category.entity";
export declare class Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    category_id: number;
    category: Category;
}
