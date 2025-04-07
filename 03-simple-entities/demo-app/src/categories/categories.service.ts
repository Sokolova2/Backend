
import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Product } from '../product/entities/product.entity';
import { Repository } from 'typeorm';
import { FilterOperator, FilterSuffix, paginate, PaginateQuery } from 'nestjs-paginate';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>
  ){}

  findProduct(categoryId: number, query: PaginateQuery){
    return paginate(query, this.productRepository, {
      sortableColumns: ['id', 'name', 'description'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['name', 'description'],
      select: ['*'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT]
      },
      where: {
        category_id: categoryId,
      }
    })
  }

  create(createCategoryDto: CreateCategoryDto) {
    return this.categoriesRepository.save(createCategoryDto)
  }

  findAll(query: PaginateQuery) {
    return paginate(query, this.categoriesRepository,{
      sortableColumns: ['id', 'name', 'description'],
      nullSort: 'last',
      defaultSortBy: [['id', 'DESC']],
      searchableColumns: ['name', 'description'],
      select: ['*'],
      filterableColumns: {
        name: [FilterOperator.EQ, FilterSuffix.NOT],
        description: true,
      },
    });
  }

  findOne(id: number) {
    return this.categoriesRepository.findOneBy({id});
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesRepository.update(id, updateCategoryDto)
  }

  remove(id: number) {
    return this.categoriesRepository.delete(id)
  }
}