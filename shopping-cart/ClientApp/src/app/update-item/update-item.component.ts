import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  public categoriesList: any;
  private productsList: any;
  public errMessage: string;
  public successMessage: string;
  public filterList:any;
  public itemForUpdate:any={};

  constructor(private products: ProductsService) { 
    this.categoriesList;
    this.productsList;
    this.filterList=[];
    this.errMessage='';
    this.successMessage='';
  }

  ngOnInit(): void {
  }

  applyFilter(filter:string){
    this.filterList[0].category==filter? this.filterList=this.productsList : this.filterList=this.productsList.filter((product:any)=>product.category==filter);
  }

  updateProduct(){
    this.products.updateProduct(this.itemForUpdate).subscribe(
      (res) =>{
        this.successMessage = "Producto actualizado con exito!";
        console.log(res);
        setTimeout(() => {
          this.successMessage = '';
        },3000)
      },
      (err) => {
        this.errMessage = "Error al actualizar el producto!";
        console.log(err);
        setTimeout(() => {
          this.errMessage = '';
        },3000)
      }
    );
  }

}
