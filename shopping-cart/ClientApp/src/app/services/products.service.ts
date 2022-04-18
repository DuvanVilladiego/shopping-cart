import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private env: string;

  constructor(private http: HttpClient) { 
    this.env = environment.APP_URL;
  }

  getAllProducts() {
    return this.http.get(this.env + '/api/products');
  }

  addProduct(product:any) {
    return this.http.post(this.env + '/api/products', product);
  }

  deleteProduct(product:any) {
    return this.http.delete(this.env + '/api/products/'+ product.id);
  }

  updateProduct(product:any) {
    return this.http.put(this.env + '/api/products/'+ product.id, product);
  }

}
