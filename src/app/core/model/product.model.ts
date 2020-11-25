import { Category } from './category.model';

export class Product {
  readonly id: number;
  readonly name: string;
  readonly subtitle: string;
  readonly description: string;
  readonly ingredients: string;
  readonly price: number;
  readonly image: string;
  readonly category: Category;
  readonly createdDate: Date;
  readonly updateddDate: Date;
}
