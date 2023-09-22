import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../datatypes';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  popularProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }
  trendyProducts() {
    return this.http.get<product[]>('http://localhost:3000/products?_limit=12');
  }
  searchProducts(query: string) {
    return this.http.get<product[]>(`http://localhost:3000/products?q=${query}`);
  }
  getDataPaytm(){
    console.log("getDataPaytm")
    return this.http.get('https://search.paytm.com/v2/search?page-count=5&category=9632');
  }
}
