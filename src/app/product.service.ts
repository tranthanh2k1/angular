import { Injectable } from '@angular/core';
import { Product } from './products/products';
import { data } from './MockData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // products: Product[] = data;
  API: string = 'https://5e79b4b817314d00161333da.mockapi.io/product';
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  addproduct(item: Product) {
    // this.products.push(item)
  }

  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.API}/${id}`)
  }
}
