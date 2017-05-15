import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { NumeralPipe } from './pipes/numeral.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SlugifyPipe, StripTagsPipe, TrimCharacterPipe, TruncatePipe } from './pipes/strings.pipe';
import { FirstUppercasePipe, CapitalisePipe } from './pipes/text-transform.pipe';

export * from './pipes/filter-by.pipe';
export * from './pipes/numeral.pipe';
export * from './pipes/order-by.pipe';
export * from './pipes/strings.pipe';
export * from './pipes/text-transform.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilterByPipe,
    NumeralPipe,
    OrderByPipe,
    SlugifyPipe, 
    StripTagsPipe, 
    TrimCharacterPipe, 
    TruncatePipe,
    FirstUppercasePipe, 
    CapitalisePipe
  ],
  exports: [
    FilterByPipe,
    NumeralPipe,
    OrderByPipe,
    SlugifyPipe, 
    StripTagsPipe, 
    TrimCharacterPipe, 
    TruncatePipe,
    FirstUppercasePipe, 
    CapitalisePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: []
    };
  }
}
