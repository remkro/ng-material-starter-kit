import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {combineLatest, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-filtered-products-list',
  templateUrl: './filtered-products-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsListComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getAll();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this._activatedRoute.params
  ]).pipe(map(([products, params]: [ProductModel[], Params]) => {
    return products.filter((product: ProductModel) => product.category === params['category']);
  }))

  constructor(private _categoryService: CategoryService, private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
  }
}
