import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IsUndefined, IsString, IsNull, IsObject, 
         IsNumber, IsGreaterThan, IsLessThan } from './boolean.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { NumeralPipe } from './numeral.pipe';
import { OrderByPipe } from './order-by.pipe';
import { SlugifyPipe, SplitPipe, StripTagsPipe, 
         TrimCharacterPipe, TruncatePipe, ObscurePipe } from './strings.pipe';
import { FirstUppercasePipe, CapitalisePipe } from './text-transform.pipe';

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
    SplitPipe,
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
    SplitPipe,
    StripTagsPipe, 
    TrimCharacterPipe, 
    TruncatePipe,
    ObscurePipe,
    FirstUppercasePipe, 
    CapitalisePipe
  ]
})
export class AngularxPipes {
}
