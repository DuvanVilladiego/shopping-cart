import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public categoriesList: any;
  private productsList: any;
  public cart: any;
  public errMessage: string;
  public filterList:any;
  public restoreStock:any;
  
  constructor(private categories: CategoriesService, private products: ProductsService) { 
    this.categoriesList;
    this.productsList;
    this.filterList=[];
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
      }
    );
    this.products.getAllProducts().subscribe(
      (res) =>{
        this.productsList = res;
        this.filterList=this.productsList;
        this.restoreCart();
      },(err) => {
        this.errMessage = err;
      }
    );
    this.restoreStock = ((product:any) => this.restoreStorageListFromCart(product));
  }

  restoreStorageListFromCart(product:any){
    this.filterList[this.filterList.indexOf(this.filterList.find((Inproduct:any)=>Inproduct.id==product.id))].stock+=product.quantity;
    this.filterList[this.filterList.indexOf(this.filterList.find((Inproduct:any)=>Inproduct.id==product.id))].quantity=0;
  }

  restoreCart(){
    const storage:any = window.localStorage.getItem('cart');
    window.localStorage.getItem('cart')? this.cart=JSON.parse(storage) : this.cart=[];
    this.cart.map((product:any) => this.addtocart(product));
  }

  applyFilter(filter:string){
    this.filterList[0].category==filter? this.filterList=this.productsList : this.filterList=this.productsList.filter((product:any)=>product.category==filter);
  }

  addtocart(product:any) {
    product.quantity? "" : product.quantity = 1;
    const productOnList:any = this.filterList[this.filterList.indexOf(this.filterList.find((Inproduct:any)=>Inproduct.id==product.id))];
    if(productOnList.stock>0) {
      this.cart.includes(product) ? this.cart[this.cart.indexOf(this.cart.find((Inproduct: any) => Inproduct.id==product.id))].quantity+=1 : this.cart.push(product);
      this.filterList[this.filterList.indexOf(this.filterList.find((Inproduct:any)=>Inproduct.id==product.id))].stock-=1;
    } else {
      this.errMessage="No hay stock suficiente";
    }
    window.localStorage.setItem('cart',JSON.stringify(this.cart));
  }

  
}
