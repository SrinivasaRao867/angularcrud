import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public products: any;
  public modal: any;

  constructor() {
      this.title = 'angularcrud';
      this.modal = {};

      this.products = [
        { productName: 'samsung mobile', productDescription: "smart phone", productImage: '../../assets/lenovo.png' },
        { productName: 'Redmi mobile', productDescription: "smart phone", productImage: "./assets/Redmi7A.png" },
        { productName: 'lenovo mobile', productDescription: "smart phone", productImage: "./assets/lenovo.png" },
      ]
  }

  public addProduct() {
    debugger
    console.log(this.modal);
    this.products.push(this.modal);
    this.modal = {};
  }
  
  editProduct(i: any) {
    debugger
    this.modal.productName = this.products[i].productName;
    this.modal.productDescription = this.products[i].productDescription;
  }

  deleteProduct(i: any) {
    window.confirm("Are you sure wnat to delete?")
    this.products.splice(i,1);
    console.log(i);
  }
}
