import { Component } from '@angular/core';
import { data } from './MockData';
import { Product } from './products/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick = false;

  products: Product[] = data;

  onAdd(product: any) {
    this.products.push(product)
  }

}
