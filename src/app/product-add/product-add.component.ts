import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../products/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // @Output() data = new EventEmitter<Product>();
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    desc: 'mố tả sản phẩm',
    status: false,
    img: 'https://salt.tikicdn.com/cache/280x280/ts/product/89/a2/66/69f041ba7b0cb97acc01f52ac9ab5c40.jpg'
  };
  constructor(private productService: ProductService) { }

  ngOnInit() { }

  onAddProduct() {
    // this.data.emit(this.product);
    this.productService.addproduct(this.product)
  }

}
