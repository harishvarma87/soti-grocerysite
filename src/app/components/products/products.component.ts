import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  productsBySub: any[] = [];
  catId: any;
  subId: any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    this.subId = this.activatedRoute.snapshot.paramMap.get('subId');
    if (!this.subId) {
      this.dataService.getProductsByCatId(this.catId).subscribe((data: any) => {
        this.products = data.data
      })
    }
    this.dataService.getProductsBySubId(this.subId).subscribe((data: any) => {
      this.products = data.data
    })
  }

  ngOnInit(): void {
  }

}
