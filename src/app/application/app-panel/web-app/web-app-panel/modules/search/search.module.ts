import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchRoutingModule } from './search-routing.module';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    Ng5SliderModule
  ]
})
export class SearchModule { }
