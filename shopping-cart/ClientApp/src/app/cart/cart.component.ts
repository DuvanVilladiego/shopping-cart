import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() productsList:any;

  constructor() { 
    this.productsList = []; 
  }

  ngOnInit(): void {  }

  log(){
    console.log(this.productsList);
  }

  deleteItem(product:any){
    const shiftItem = this.productsList;
    console.log(shiftItem.indexOf(product));
    // this.productsList.splice(,1);
  }

}
