import { Component, Input, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() productsList:any = [];
  @Input() updateProductsStock:any;
  public cartItems: any = [];
  public successMessage: string;
  public errMessage: string;
  public saleBody: any;

  constructor(private sale:SalesService) { 
    this.productsList = []; 
    this.successMessage = '';
    this.errMessage = '';
    this.saleBody = {
      customername: '',
      Products: '',
      Total: 0
    };
  }

  ngOnInit(): void {}

  generateSale(){
    let ProductArrayText:any=[];
    this.productsList.cart.map((product:any)=>{ProductArrayText.push(product.name)});
    this.saleBody.Products=ProductArrayText.join();
    this.saleBody.Total=this.productsList.cart.reduce((total:any, product:any)=>{return total + product.price * product.quantity},0)
    this.sale.GenerateSale(this.saleBody).subscribe(
      (res)=>{
        this.successMessage = "Compra realizada con exito!";
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
        window.localStorage.clear();
        this.productsList.cart=[];
      },
      (err)=>{
        this.errMessage = "Error al realizar la compra!";
        setTimeout(() => {
          this.errMessage = '';
        },3000)
      }
    );
  }

  totalCartPrice(){
    return this.productsList.cart.reduce((total:any, product:any)=>{return total + product.price * product.quantity},0);
  }

  deleteItem(product:any){
    this.productsList.cart.splice(this.productsList.cart.indexOf(product),1);
    window.localStorage.setItem('cart',JSON.stringify(this.productsList.cart));
    this.updateProductsStock.restoreStock(product);
  }

}
