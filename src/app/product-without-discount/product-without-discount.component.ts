import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product-without-discount',
  templateUrl: './product-without-discount.component.html',
  styleUrls: ['./product-without-discount.component.scss']
})
export class ProductWithoutDiscountComponent implements OnInit {
  prodWithoutDiscount=[
    {
      ID: 1,
      Name: "Note 10",
      Img: "../../assets/Images/Note10.jpg",
      Price: 5500,
      Quantity: 3
    },
    {
      ID: 2,
      Name: "iphone 8",
      Img: "../../assets/Images/iphone8.jpg",
      Price: 8500,
      Quantity: 5
    },
    {
      ID: 3,
      Name: "iphone X",
      Img: "../../assets/Images/iphoneX.jpg",
      Price: 15200,
      Quantity: 7
    }
  ];
  constructor() { }

  ngOnInit(): void {
    
  }

}
