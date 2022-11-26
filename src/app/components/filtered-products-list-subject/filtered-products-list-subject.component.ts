import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-filtered-products-list-subject',
  templateUrl: './filtered-products-list-subject.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductsListSubjectComponent {
  readonly categories$: Observable<string[]> = this._categoryService.getAll();
  private _categorySubject: Subject<string> = new Subject<string>();
  public category$: Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.category$
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter(product => product.category === category)
    })
  );

  constructor(private _categoryService: CategoryService, private _productService: ProductService) {
  }

  selectCategory(category: string): void {
    this._categorySubject.next(category)
  }
}
