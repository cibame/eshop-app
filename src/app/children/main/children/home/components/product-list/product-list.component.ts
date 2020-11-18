import {Component, OnInit} from '@angular/core';
import {CartService} from '../../../../../../core/cart/cart.service';
import {Product} from '../../../../../../core/firebase/model/product.firebase';
import {ProductService} from '../../../../../../core/firebase/service/product.service';

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
    // TODO: Handle error
    console.log('list');
    this._productService.getProducts().subscribe((res) => {
      this._products = [...res, ...res, ...res, ...res, ...res, ...res];
      console.log(this._products);
    });
  }

  addToCart(): void {
    this._cartService.count++;
  }
}
