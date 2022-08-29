import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'http://apolis-grocery.herokuapp.com/api'
  constructor(private http: HttpClient) { }
  getcategory(){
    return this.http.get(`${this.BASE_URL}/category`)
  }
  getSubCategoryByCatId(catId:any){

    return this.http.get(`${this.BASE_URL}/subcategory/${catId}`)
  }
  getProductsByCatId(catId:any){
    return this.http.get(`${this.BASE_URL}/products/cat/${catId}`)
  }
  getProductsBySubId(subId:any){
    return this.http.get(`${this.BASE_URL}/products/sub/${subId}`)
  }
  getProductById(Id:any){
    return this.http.get(`${this.BASE_URL}/products/${Id}`)
  }
}
