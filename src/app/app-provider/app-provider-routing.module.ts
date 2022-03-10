import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';
const routes: Routes = [


  {path: 'provider',component:ProviderComponent},
  {path: 'listProvider',component:MainProviderComponent},
  {path: 'provider/:id',component:ShowOneProviderComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppProviderRoutingModule { }
