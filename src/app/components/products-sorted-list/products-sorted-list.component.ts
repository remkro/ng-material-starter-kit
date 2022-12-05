import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {BehaviorSubject, Observable, of, combineLatest} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-products-sorted-list',
  templateUrl: './products-sorted-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSortedListComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public order$: Observable<string> = this._orderSubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.order$
  ]).pipe(
    map(([products, order]: [ProductModel[], string]) => {
      return products.sort((a, b) => {
        if(a.price > b.price) return order === 'asc' ? 1 : -1;
        if(a.price < b.price) return order === 'asc' ? -1 : 1;
        return 0
      })

    })
  );
  public orders$: Observable<string[]> = of(['asc', 'desc']);

  constructor(private _productService: ProductService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order);
  }
}
