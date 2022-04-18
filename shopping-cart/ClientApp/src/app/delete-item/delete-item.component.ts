import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {
  public itemForDelete:any={};
  private listItems:any=[];
  public successMessage: string;
  public errMessage: string;

  constructor(private product:ProductsService) {
    this.successMessage = '';
    this.errMessage = '';
  }

  ngOnInit(): void {
    this.product.getAllProducts().subscribe(
      (res:any) =>{
        this.listItems = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteItem(){
    this.listItems.filter((item:any)=>{item.name == this.itemForDelete.Name?this.listItems=item:null});
    this.product.deleteProduct(this.listItems).subscribe(
      (res) =>{
        console.log(res);
        this.successMessage = "Producto eliminado con exito!";
        setTimeout(() => {
          this.successMessage = '';
        },3000)
      },
      (err) => {
        console.log(err);
        this.errMessage = "Error al eliminar el producto!";
        setTimeout(() => {
          this.errMessage = '';
        },3000)
      }
    ); 
  }
}
