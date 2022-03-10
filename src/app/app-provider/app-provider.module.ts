import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppProviderRoutingModule } from './app-provider-routing.module';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';
import { ProviderComponent } from './provider/provider.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MainProviderComponent,
    ShowOneProviderComponent,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    AppProviderRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class AppProviderModule { }
