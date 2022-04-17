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

}
