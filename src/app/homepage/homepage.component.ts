import {AfterViewInit, Component, OnInit } from '@angular/core';
import { product } from '../datatypes';
import { ProductService } from '../services/product.service';
import { interval } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit  {
  popularProducts: undefined | product[];
  trendyProducts: undefined | product[];
  gridList: any;

  ngAfterViewInit() {
    $('.new-slider .owl-item').owlCarousel({
      items: 4, // Number of items to display
      // Other options...
    });
  }
constructor(private product:ProductService){}
  ngOnInit(): void {

    this.product.popularProducts().subscribe((data) => {
      //console.log(data)
      this.popularProducts = data;
    });

 this.product.trendyProducts().subscribe((data) => {
      //console.log(data)
      this.trendyProducts = data;
    });
    let respData: any = {};
    this.product.getDataPaytm().subscribe((data)=>{
    console.log(data)
    respData = data;
    console.log(respData.grid_layout)
    this.gridList=respData.grid_layout;
    })
  }




}
