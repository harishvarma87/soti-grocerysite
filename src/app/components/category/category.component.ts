import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories : any[]=[];

  constructor(private dataservice : DataService, private router: Router) {
    this.dataservice.getcategory().subscribe((data: any) => {
      this.categories = data.data
    })
   }

   onClickHandler(category:any){
    this.router.navigate(['products/',category.catId])
   }
  
  

  ngOnInit(): void {
  }

}
