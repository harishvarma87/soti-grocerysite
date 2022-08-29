import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcat',
  templateUrl: './subcat.component.html',
  styleUrls: ['./subcat.component.css']
})
export class SubcatComponent implements OnInit {

  subCategories:any []=[];
  catId:any;
  CatId:any;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.catId=this.activatedRoute.snapshot.paramMap.get('catId');
    
    this.dataService.getSubCategoryByCatId(this.catId).subscribe((data: any) => {
      this.subCategories = data.data
  
    })
   }

  ngOnInit(): void {
  }

}
