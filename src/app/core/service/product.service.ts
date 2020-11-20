import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Product} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private readonly _http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(environment.baseUrl + '/products');
  }
}
