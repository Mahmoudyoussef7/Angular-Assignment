import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-with-discount',
  templateUrl: './product-with-discount.component.html',
  styleUrls: ['./product-with-discount.component.scss']
})
export class ProductWithDiscountComponent implements OnInit {
  prodWithDiscount = [{
    "ID": 4,
    "Name": "iphone 12 Pro",
    "Img": "../../assets/Images/iphone-12-pro.jpg",
    "Price": 22100,
    "Quantity": 20
  },
  {
    "ID": 5,
    "Name": "Galaxy A52",
    "Img": "../../assets/Images/Samsung-Galaxy-A52.jpg",
    "Price": 5600,
    "Quantity": 12
  },
  {
    "ID": 6,
    "Name": "Xiaomi note 10",
    "Img": "../../assets/Images/Xiaomi-Note-10.jpg",
    "Price": 5600,
    "Quantity": 15
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
