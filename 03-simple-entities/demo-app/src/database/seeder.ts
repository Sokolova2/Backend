import { DataSource } from "typeorm";
import { Category } from "../categories/entities/category.entity";
import { Product } from "../product/entities/product.entity";

const dataSource = new DataSource({
    type: 'postgres',
    host: 'pg',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'demo-app',
    
    entities: [Category, Product],
    synchronize: true,
});


async function seedDatabase() {
    await dataSource.initialize();
    console.log("Database connection established.");

    const categoryRepository = dataSource.getRepository(Category);
    const productRepository = dataSource.getRepository(Product);

    const categories = await categoryRepository.save([
        { name: "Winter clothes", description: "Clothes for the cold season", image: "https://placeimg.com/200/300/"},
        { name: "Summer clothes", description: "Clothes for the hot season", image: "https://placeimg.com/200/300/"},
        { name: "Demi-season", description: "Clothes for autumn and spring", image: "https://placeimg.com/200/300/"}
    ]);

    console.log("Categories seeded:", categories);

    const products = await productRepository.save([
        { name: "T-shirt", description: "Clothes for the summer", price: 450, image: "https://placeimg.com/200/300/", category: categories[1]},

        { name: "Jacket", description: "Clothes for the winter", price: 3000, image: "https://placeimg.com/200/300/", category: categories[0]},

        { name: "Coat", description: "Clothes for autumn and spring", price: 1200, image: "https://placeimg.com/200/300/", category: categories[2] },

        { name: "Cap", description: "Clothes for the winter", price: 500, image: "https://placeimg.com/200/300/", category: categories[0] },

        { name: "Short", description: "lothes for the summer", price: 700, image: "https://placeimg.com/200/300/", category: categories[1] },
    ]);

    console.log("Products seeded:", products);

    await dataSource.destroy();
    console.log("Database connection closed.");
}

seedDatabase().catch((error) => console.error("Error seeding database:", error));