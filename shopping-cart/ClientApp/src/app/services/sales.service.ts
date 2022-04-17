import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private env:string;

  constructor(private http: HttpClient) { 
    this.env = environment.APP_URL;
  }

  GenerateSale(sale:object) {
    return this.http.post(this.env + '/api/sales', sale);
  }
}
