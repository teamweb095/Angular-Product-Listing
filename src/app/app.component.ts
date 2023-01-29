import { Component, OnInit } from '@angular/core';
import { HttpCallService } from './http-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Product-Listing';
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
