import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../http-call.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList = [];
  constructor(private httpCallService: HttpCallService){
    this.productList = [];
  }
  
  ngOnInit() {
    this.httpCallService.getProducts().subscribe((productslistData: any) =>{
      console.log(productslistData);
      this.productList = productslistData.products;

    });
  }
}
