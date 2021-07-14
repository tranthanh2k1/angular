import { Component, OnInit, Input } from '@angular/core';
import { Product } from './products';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @Input() products: Product[];
  // data: Product;
  products: Product[];
  data: Product;
  myClass = 'table-bordered';
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getproducts()
  }

  getproducts() {
    this.productService.getProduct().subscribe(data => {
      this.products = data;
    })
  }

  removeItem(id: number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.products = this.products.filter(item => item.id !== id);
    })
  }

  detailItem(product: Product) {
    // this.data = product;
    // useContext: state sử dụng global
    // https://codesandbox.io/s/usecontext-9xf5d
    // useSelector -> Reselect
    // 
  }

}
