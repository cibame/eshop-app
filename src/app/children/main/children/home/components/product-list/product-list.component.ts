import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../../../../core/cart/cart.service';
import {ProductService} from '../../../../../../core/service/product.service';
import {Product} from '../../../../../../core/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  _products: Product[];

  constructor(private readonly _productService: ProductService,
              private _cartService: CartService) {
  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe((res) => {
      this._products = res;
    }, error => console.error(error));
  }

  addToCart(p: Product): void {
    this._cartService.add(p);
  }
}
