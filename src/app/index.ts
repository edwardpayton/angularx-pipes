import {NgModule} from '@angular/core';

import { NumeralPipe } from './pipes/numeral.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { FirstUppercasePipe, CapitalisePipe } from './pipes/text-transform.pipe';
import { 
    TruncatePipe, 
    TrimCharacterPipe, 
    SplitPipe, 
    StripTagsPipe, 
    SlugifyPipe 
} from './pipes/strings.pipe';

@NgModule({
    exports: [
        NumeralPipe,
        OrderByPipe,
        FilterByPipe,
        TruncatePipe, 
        TrimCharacterPipe, 
        SplitPipe, 
        StripTagsPipe, 
        SlugifyPipe 
    ]
})
export class AngularPipesModule {}

export * from './pipes/numeral.pipe';
export * from './pipes/order-by.pipe';
export * from './pipes/filter-by.pipe';
export * from './pipes/strings.pipe';