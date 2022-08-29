import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

  product:any="";
  id:any;
  constructor(private dataService : DataService, private activatedRouter : ActivatedRoute) {
    this.id= this.activatedRouter.snapshot.paramMap.get('id')
    this.dataService.getProductById(this.id).subscribe((resource:any)=>{
      this.product=resource.data;
    })
   }

  ngOnInit(): void {
  }

}
