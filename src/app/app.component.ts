import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'assignment-Project';
  // @ViewChild(ProductsComponent) child!: ProductsComponent;

  // fire()
  // {
  //   this.child.renderValues();
  // }
}
