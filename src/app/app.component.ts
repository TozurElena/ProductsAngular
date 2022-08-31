import { Component, OnInit } from '@angular/core';
import { IProduct } from './components/models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Products  Angular';
  // products: IProduct[] = [];
  // products$: Observable<IProduct[]>;
  loading = false;
  term= '';

  constructor(
    public productsService: ProductsService,
    public  modalService: ModalService
    ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.productsService.getAll().subscribe( () => {
      this.loading = false;
    })
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // );

  }
}
