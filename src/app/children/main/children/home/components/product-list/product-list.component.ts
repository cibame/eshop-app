import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../../../../core/cart/cart.service';
import { Category } from '../../../../../../core/model/category.model';
import { Product } from '../../../../../../core/model/product.model';
import { ProductService } from '../../../../../../core/service/product.service';

interface CategoryProducts {
  category: Category;
  products: Product[];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  _products: Product[];
  _categoryProducts: CategoryProducts[] = [];

  get categories(): string[] {
    return Object.keys(this._categoryProducts);
  }

  constructor(
    private readonly _productService: ProductService,
    private _cartService: CartService
  ) {}

  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      (res) => {
        this._products = res;
        this.parseCategories();
      },
      (error) => console.error(error)
    );
  }

  private parseCategories(): void {
    this._products.forEach((product) => {
      const index = this._categoryProducts.findIndex(
        (c) => c.category?.id === product.category?.id
      );

      if (index === -1) {
        const catProduct = { category: product.category, products: [product] };
        this._categoryProducts.push(catProduct);
      } else {
        this._categoryProducts[index].products.push(product);
      }
    });
  }

  addToCart(p: Product): void {
    this._cartService.add(p);
  }
}
