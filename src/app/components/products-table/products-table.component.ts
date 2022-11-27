import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  readonly products$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }

  displayedColumns: string[] = ['image', 'title', 'category', 'price'];

}
