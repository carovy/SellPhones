import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { PhonesStoreComponent } from './phones-store/phones-store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'store',
    pathMatch: 'full',
  },
  {
    path: 'store',
    component: PhonesStoreComponent
  },
  {
    path: 'purchases',
    component: PurchasesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
