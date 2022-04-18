import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list-full-item-data',
  templateUrl: './list-full-item-data.component.html',
  styleUrls: ['./list-full-item-data.component.css']
})
export class ListFullItemDataComponent implements OnInit {
  public categoriesList: any;
  private productsList: any;
  public filterList:any;

  constructor(private categories: CategoriesService, private products: ProductsService) { 
    this.categoriesList;
    this.productsList;
    this.filterList=[];
  }

  ngOnInit(): void {
    this.categories.getAllCategories().subscribe(
    (res) =>{
      this.categoriesList = res;
    },
    (err) => {}
  );
  this.products.getAllProducts().subscribe(
    (res) =>{
      this.productsList = res;
      this.filterList=this.productsList;
    },(err) => {}
  );
  }

  applyFilter(filter:string){
    this.filterList[0].category==filter? this.filterList=this.productsList : this.filterList=this.productsList.filter((product:any)=>product.category==filter);
  }

}
