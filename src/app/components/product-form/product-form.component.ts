import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });
  readonly categories$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _productService: ProductService, private _categoryService: CategoryService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productService.create(
      {
        title: productForm.get('title')?.value,
        price: productForm.get('price')?.value,
        category: productForm.get('category')?.value,
        description: productForm.get('description')?.value,
        image: productForm.get('image')?.value
      }
    ).subscribe();
  }
}
