export { AngularxPipes } from './pipes/pipes.module';

export { IsUndefined, IsString, IsNull, IsObject, 
         IsNumber, IsGreaterThan, IsLessThan } from './pipes/boolean.pipe';
export { FilterByPipe } from './pipes/filter-by.pipe';
export { NumeralPipe } from './pipes/numeral.pipe';
export { OrderByPipe } from './pipes/order-by.pipe';
export { SlugifyPipe, SplitPipe, StripTagsPipe,
         TrimCharacterPipe, TruncatePipe, ObscurePipe } from './pipes/strings.pipe';
export { FirstUppercasePipe, CapitalisePipe } from './pipes/text-transform.pipe';
