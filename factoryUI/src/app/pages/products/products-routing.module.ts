import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListComponent} from "./products-list/products-list.component";
import { ProductFormComponent} from "./product-form/product-form.component";

const routes: Routes = [
  {path: '', component: ProductsListComponent},
  {path: 'new', component: ProductFormComponent},
  {path: ':id/edit', component: ProductFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
