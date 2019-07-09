import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PruebaJhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PruebaJhSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PruebaJhSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PruebaJhSharedModule {
  static forRoot() {
    return {
      ngModule: PruebaJhSharedModule
    };
  }
}
