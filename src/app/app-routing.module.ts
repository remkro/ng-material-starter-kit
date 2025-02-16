import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { CategoryChecklistComponent } from './components/category-checklist/category-checklist.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartComponent } from './components/cart/cart.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { FilteredProductsListComponent } from './components/filtered-products-list/filtered-products-list.component';
import { FilteredProductsListSubjectComponent } from './components/filtered-products-list-subject/filtered-products-list-subject.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';
import { ProductsSortedListComponent } from './components/products-sorted-list/products-sorted-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto-service.module';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { HolidayServiceModule } from './services/holiday.service-module';
import { CategoryChecklistComponentModule } from './components/category-checklist/category-checklist.component-module';
import { CategoryMenuComponentModule } from './components/category-menu/category-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { UserFormComponentModule } from './components/user-form/user-form.component-module';
import { UserServiceModule } from './services/user.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { CartComponentModule } from './components/cart/cart.component-module';
import { CartServiceModule } from './services/cart.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { ActivityDetailsComponentModule } from './components/activity-details/activity-details.component-module';
import { ActivityServiceModule } from './services/activity.service-module';
import { FilteredProductsListComponentModule } from './components/filtered-products-list/filtered-products-list.component-module';
import { FilteredProductsListSubjectComponentModule } from './components/filtered-products-list-subject/filtered-products-list-subject.component-module';
import { ProductsTableComponentModule } from './components/products-table/products-table.component-module';
import { ProductsSortedListComponentModule } from './components/products-sorted-list/products-sorted-list.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: HolidayListComponent }, { path: 'checkbox-categories', component: CategoryChecklistComponent }, { path: 'categories-menu', component: CategoryMenuComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'login', component: LoginFormComponent }, { path: 'register', component: UserFormComponent }, { path: 'product/:id', component: ProductDetailsComponent }, { path: 'cat-fact', component: CatFactComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'cart/:id', component: CartComponent }, { path: 'user/:id', component: UserDetailsComponent }, { path: 'activity', component: ActivityDetailsComponent }, { path: 'products/:category', component: FilteredProductsListComponent }, { path: 'products-subject', component: FilteredProductsListSubjectComponent }, { path: 'product-search', component: ProductsTableComponent }, { path: 'products-sorted', component: ProductsSortedListComponent }]), ProductListComponentModule, ProductServiceModule, CategoryListComponentModule, CategoryServiceModule, CryptoListComponentModule, CryptoServiceModule, HolidayListComponentModule, HolidayServiceModule, CategoryChecklistComponentModule, CategoryMenuComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginFormComponentModule, LoginServiceModule, UserFormComponentModule, UserServiceModule, ProductDetailsComponentModule, CatFactComponentModule, CatFactServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, CartComponentModule, CartServiceModule, UserDetailsComponentModule, ActivityDetailsComponentModule, ActivityServiceModule, FilteredProductsListComponentModule, FilteredProductsListSubjectComponentModule, ProductsTableComponentModule, ProductsSortedListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
