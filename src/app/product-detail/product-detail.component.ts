import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
