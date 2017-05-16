import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsUndefined, IsString, IsNull, IsObject, 
         IsNumber, IsGreaterThan, IsLessThan } from './pipes/boolean.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { NumeralPipe } from './pipes/numeral.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SlugifyPipe, StripTagsPipe, TrimCharacterPipe, 
         TruncatePipe, ObscurePipe } from './pipes/strings.pipe';
import { FirstUppercasePipe, CapitalisePipe } from './pipes/text-transform.pipe';

export * from './pipes/boolean.pipe';
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
    IsUndefined,
    IsString,
    IsNull,
    IsObject, 
    IsNumber,
    IsGreaterThan,
    IsLessThan,
    FilterByPipe,
    NumeralPipe,
    OrderByPipe,
    SlugifyPipe, 
    StripTagsPipe, 
    TrimCharacterPipe, 
    TruncatePipe,
    ObscurePipe,
    FirstUppercasePipe, 
    CapitalisePipe
  ],
  exports: [
    IsUndefined,
    IsString,
    IsNull,
    IsObject, 
    IsNumber,
    IsGreaterThan,
    IsLessThan,
    FilterByPipe,
    NumeralPipe,
    OrderByPipe,
    SlugifyPipe, 
    StripTagsPipe, 
    TrimCharacterPipe, 
    TruncatePipe,
    ObscurePipe,
    FirstUppercasePipe, 
    CapitalisePipe
  ]
})
export class AngularxPipes {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularxPipes,
      providers: []
    };
  }
}
