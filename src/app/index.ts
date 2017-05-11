import {NgModule} from '@angular/core';

import { NumeralPipe } from './pipes/numeral.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
    exports: [
        NumeralPipe,
        OrderByPipe,
        FilterByPipe
    ],
    declarations: [NumeralPipe, OrderByPipe, FilterByPipe]
})
export class AngularPipesModule {}

export * from './pipes/numeral.pipe';
export * from './pipes/order-by.pipe';
export * from './pipes/filter-by.pipe';