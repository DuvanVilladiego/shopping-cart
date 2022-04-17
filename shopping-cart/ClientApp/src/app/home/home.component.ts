import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public categoriesList: any;
  public productsList: any;
  public cart: any;
  public errMessage: string;
  
  constructor(private categories: CategoriesService, private products: ProductsService) { 
    this.categoriesList;
    this.productsList;
    this.errMessage='';
    this.cart=[];
  }

  ngOnInit() {
    this.categories.getAllCategories().subscribe(
      (res) =>{
        this.categoriesList = res;
      },
      (err) => {

        this.errMessage = err;
        console.log(err);
      }
    );
    this.products.getAllProducts().subscribe(
      (res) =>{
        this.productsList = res;
      },(err) => {
        this.errMessage = err;
        console.log(err);
      }
    );
  }

  addtocart(product:any) {
    product.quantity? "" : product.quantity = 1;
    this.cart.includes(product) ? this.cart[this.cart.indexOf(this.cart.find((Inproduct: any) => Inproduct==product))].quantity+=1 : this.cart.push(product);
    console.log(this.cart);
  }
}
