import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  public newItem:any={};
  public successMessage: string;
  public errMessage: string;

  constructor(private product:ProductsService) {
    this.newItem = {};
    this.successMessage = '';
    this.errMessage = '';
  }

  ngOnInit(): void {
  }

  addProduct(){
    this.product.addProduct(this.newItem).subscribe(
      (res) =>{
        console.log(res);
        this.successMessage = "Producto agregado con exito!";
        setTimeout(() => {
          this.successMessage = '';
        },3000)
      },
      (err) => {
        console.log(err);
        this.errMessage = "Error al agregar el producto!";
        setTimeout(() => {
          this.errMessage = '';
        },3000)
      }
    );
  }

}
