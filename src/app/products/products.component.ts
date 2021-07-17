import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { DiscountOffers } from '../Shared Classes and types/discount-offers';
import { ICategory } from '../Shared Classes and types/icategory';
import { IProduct } from '../Shared Classes and types/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  isPurshased: boolean;
  errMsg="";

  constructor(private prodService:ProductService,private router:Router,private activeRouter:ActivatedRoute) {
    this.discount = DiscountOffers.second;
    this.storeName = "Souq";
    this.storeLogo = "../../assets/Images/Note10.jpg";
    this.productList = [];
    this.categoryList = [
      {
        ID: 1,
        Name: "Phones"
      },
      {
        ID: 2,
        Name: "PC"
      },
      {
        ID: 3,
        Name: "Tablets"
      }

    ];

    this.clientName = "";
    this.isPurshased = true;
  }

  ngOnInit(): void {
    this.renderValues();
  }

  purchased(cName:any)
  {
    this.clientName=cName;
    this.isPurshased=false;
  }

  hasDiscount(): boolean {
    if (this.discount == DiscountOffers.None)
      return false;
    else
      return true;
  }

  renderValues()
  {
    this.prodService.getAllProducts()
    .subscribe((ProdData)=>
      {
        this.productList = ProdData;
      }
    ,errData=>{this.errMsg=errData}
    );
  }

  withDiscount()
  {
    this.router.navigate(['with-discount'],{relativeTo:this.activeRouter})
  }

  withoutDiscount()
  {
    this.router.navigate(['without-discount'],{relativeTo:this.activeRouter})
  }

}
