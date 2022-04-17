import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private env: string;

  constructor(private http: HttpClient) {
    this.env = environment.APP_URL;
  }

  getAllCategories() {
    return this.http.get(this.env + '/api/Products/categories');
  }
}
