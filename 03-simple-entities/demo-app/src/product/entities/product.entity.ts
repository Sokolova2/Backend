import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm"
import { Category } from "../../categories/entities/category.entity";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column("text", {nullable: true})
    description?: string;

    @Column("float")
    price: number;

    @Column()
    image: string;

    @CreateDateColumn({type:"timestamp"})
    createdAt: Date;

    @UpdateDateColumn({type:"timestamp"})
    updatedAt: Date;
    
    @Column({name: 'category_id', nullable: true })
    category_id : number;

    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'category_id'})
    category: Category;
}
